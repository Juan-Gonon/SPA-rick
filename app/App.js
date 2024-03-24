import { Header } from "./components/Header.js";
import { ajax } from "./helpers/ajax.js";
import { axioInstance } from "./helpers/urls.js";
import { main } from "./components/Main.js";
import { containerCards } from "./components/ContainerCard.js";
import { Router } from "./components/Router.js";



export const App = ()=>{
    const divRoot = document.querySelector("#root");
    const header = document.createElement('header');

    divRoot.innerHTML = '';

    header.classList.add('header');

    header.innerHTML = `<h1 class="title">API Rick y Morty SPA</h1>`;
    header.appendChild(Header());

    divRoot.append(header);
    divRoot.appendChild(main())
    
    // ajax({
    //     url : axioInstance,
    //     callback: (data)=> document.querySelector("#section").appendChild(containerCards(data))
    // })

    Router();
}