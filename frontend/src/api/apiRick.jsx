import axios from "axios";

const apiRick = axios.create({ //cria uma instância do axios
    baseURL: "https://rickandmortyapi.com", //define a URL base da API
})

export default apiRick;