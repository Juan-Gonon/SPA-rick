import { Header } from "./components/Header.js";
import { ajax } from "./helpers/ajax.js";
import { axioInstance } from "./helpers/urls.js";
import { main } from "./components/Main.js";
import { containerCards } from "./components/ContainerCard.js";


export const App = ()=>{
    const divRoot = document.querySelector("#root");
    divRoot.innerHTML = "<h1> Nuestra primera web SPA</h1>";
    divRoot.appendChild(Header());
    divRoot.appendChild(main())
    
    ajax({
        url : axioInstance,
        callback: (data)=> document.querySelector("#section").appendChild(containerCards(data))
    })
}