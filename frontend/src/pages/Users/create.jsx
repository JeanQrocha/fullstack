import { useState } from "react"
import { createUser } from "../../api/users"
import { Navigate } from "react-router-dom"

export default function CreateUser() {
    const [user , setUser] = useState({
        name: '',
        email: '',
        senha: '',
        ativo: true
    })    

    const hendleChange = (e) => {  
        const { id, value } = e.target
        setUser({
            ...user,
            [id]: value
        })
    }

    const hendleSave = async (e) => {
        e.preventDefault()
        // validar os dados

       const response = await createUser(user)

       if(response.status === 201) {
        Navigate('/users')
       } else {
       console.log(response)}}



    return (
        <main>
            <h1>Criando Usuário</h1>
            <form>
                   <div>
                <label>Nome:</label>
                <input type="text" name="nome" id='nome' value={user.nome} onChange={hendleChange} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" id="email" value={user.email}  onChange={hendleChange}/>
            </div>
            <div>
                <label>Senha</label>
                <input type="password" name="senha" id="senha" value={user.senha} onChange={hendleChange}/>
            </div>
            <div>
                <button type="reset">Limpar</button>
                <button type="submit" onClick={hendleSave}>Criar</button>
            </div>
            </form>
            
         
        </main>
    );
}