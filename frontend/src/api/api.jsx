import axios from "axios";

const api = axios.create({ //cria uma instância do axios
    baseURL: "http://localhost:3000", //define a URL base da API
})

export default api;