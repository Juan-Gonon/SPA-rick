import { Header } from "./components/Header.js";
import { main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { search } from "./components/Search.js";



export const App = ()=>{
    const divRoot = document.querySelector("#root");
    const header = document.createElement('header');

    divRoot.innerHTML = '';

    header.classList.add('header');

    header.innerHTML = `<h1 class="title">API Rick y Morty SPA</h1>`;
    header.appendChild(Header());
    
    divRoot.append(header);
    divRoot.append(search())
    divRoot.appendChild(main())
    

    Router();
}