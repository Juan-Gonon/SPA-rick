import { Header } from "./components/Header.js";
import { ajax } from "./helpers/ajax.js";
import api from "./helpers/urls.js"


export const App = ()=>{
    const divRoot = document.querySelector("#root");
    divRoot.innerHTML = "<h1> Nuestra primera web SPA</h1>";
    divRoot.appendChild(Header());
    
    ajax({
        url : api.TODOS,
        callback: (data)=> console.log(data)
    })
}