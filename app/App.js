import { Header } from "./components/Header.js";

export const App = ()=>{
    const divRoot = document.querySelector("#root");
    divRoot.innerHTML = "<h1> Nuestra primera web SPA</h1>";
    divRoot.appendChild(Header());
    

}