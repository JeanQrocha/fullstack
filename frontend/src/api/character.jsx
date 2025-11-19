import apiRick from "./apiRick";

export const getCharacters = async () => {
    const response = await apiRick.get('/character')

    if(response.status !== 200){
        throw new Error('Erro ao buscar personagens')

    }

    return response.data.results
} 