//const TODOS = "https://rickandmortyapi.com/api/character";
const SEARCHID = "https://rickandmortyapi.com/api/character/";
const SEARCHNAME = "https://rickandmortyapi.com/api/character/?name=";

export const axioInstance = new axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    headers:{
        'Content-Type': 'application/json;charset=utf-8',
    }
})
