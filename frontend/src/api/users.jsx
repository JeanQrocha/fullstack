import api from "./api"

export const getUsers = async () => { //função para buscar usuários
    const response = await api.get('/api/v1/users') //chama a api para buscar os usuários

    if(response.status !== 200){
        throw new Error('Erro ao buscar usuários')
    }

    return response.data.users //retorna os usuários
} 


export const createUser = async (user) => {     //função para criar usuário
    const response =  await api.post('/api/v1/user', user) //chama a api para criar o usuário

    if(response.status !== 201){
        throw new Error('Erro ao criar usuário')
    }
    return response //retorna a resposta da api
}
export const updateUser = async (id, user) => { //função para atualizar usuário
    const response = await api.put(`/api/v1/user/${id}`, user)      //chama a api para atualizar o usuário
    if(response.status !== 204){
        throw new Error('Erro ao deletar usuário')
    }                       
    return response //retorna a resposta da api
}

export const deleteUser = async (id) => { //função para deletar usuário
    const response = await api.delete(`/api/v1/user/${id}`) //chama a api para deletar o usuário
    if(response.status !== 204){
        throw new Error('Erro ao deletar usuário')
    }                       
    return response //retorna a resposta da api
}
        