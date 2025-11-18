import User from '../model/users.js'
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'

const JWT_SECRET = "S3gr3do"
const SALT = 10 // 12

class ServiceUser {
    async FindAll() {
        return User.findAll()
    }

    async FindOne(id) {
        //verificar se o index é valido e se for um numero. verificar se ele for menor q o .lenth
        if (!id) {
            throw new Error('Favor informar um ID')

        }

        const user = await User.findByPk(id)

        if (!user) {
            throw new Error(`Usuario ${id} não encontrado`)
        }

        return user
    }

    async Create(nome, email, senha, ativo, permissao) {
        //verificar se o nome é valido
        if (!nome || !email || !senha) {
            throw new Error('Favor preencher todos os campos')
        }

        const senhaCriptografada = await bcrypt.hash(String(senha), SALT)

        await User.create({
            nome,
            email,
            senha: senhaCriptografada,
            ativo,
            permissao
        })
    }

    async Update(id, nome, email, senha, ativo,) {
        //verificar se o indexe o nome sao validos e se for um numero. verificar se ele for menor q o .lenth
        if (!id || !nome || !email || !senha) {
            throw new Error('Favor informar um ID')

        }

        const userOld = await User.findByPk(id)

        if (!userOld) {
            throw new Error(`Usuario ${id} não encontrado`)
        }

        userOld.nome = nome || userOld.nome
        userOld.email = email || userOld.email
        userOld.senha = senha 
        ? await bcrypt.hash(String(senha), SALT)
        :userOld.senha

        return userOld.save()
    }

    async Delete(id) {
        //verificar se o index e o nome sao validos e se for um numero. verificar se ele for menor q o .lenth
        if (!id) {
            throw new Error('Favor informar um ID')

        }

        const user = await User.findByPk(id)

        if (!user) {
            throw new Error(`Usuario ${id} não encontrado`)
        }

        return user.destroy()
    }

    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error("Email ou senha inválidos");
        }
        const user = await User.findOne({ where: { email } })

        // const IsValidPassword = await bcrypt.compare(String(senha), user.senha)
        if (
            !user 
            || !(await bcrypt.compare(String(senha), user.senha)) //IsValidPassword
        ) {
            throw new Error("Email ou senha inválidos");
        }

        return jwt.sign(
            { id: user.id, nome: user.nome, permissao: user.permissao },
            JWT_SECRET,
            { expiresIn: 60 * 60 })

    }


}

export default new ServiceUser()