import api from "./api"

export const getUsers = async () => {
    const response = await api.get('/api/v1/users')

    if(response.status !== 200){
        return [] // throw new Error('')
    }

    return response.data.users
} 


export const createUser = async (user) => {
    const response =  await api.post('/api/v1/user', user)

    if(response.status !== 201){
        throw new Error('Erro ao criar usuário')
    }
    return response
}
export const updateUser = async (id, user) => {
    const response = await api.put(`/api/v1/user/${id}`, user)
    if(response.status !== 204){
        throw new Error('Erro ao deletar usuário')
    }                       
    return response
}

export const deleteUser = async (id) => {
    const response = await api.delete(`/api/v1/user/${id}`)
    if(response.status !== 204){
        throw new Error('Erro ao deletar usuário')
    }                       
    return response
}
        