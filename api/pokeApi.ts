import axios from "axios";

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});


export default pokeApi;

//pokeApi.get('/pokemon?offset=300&limit=100')
