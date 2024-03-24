import { ajax } from "../helpers/ajax.js";
import { axioInstance } from "../helpers/urls.js";
import { containerCards } from "./ContainerCard.js";
import { Card } from "./card.js";

export const Router = ()=>{
    let {hash} = location;


    if(hash === "" || hash == "#/"){
        ajax({
            url : axioInstance,
            callback: (data)=> document.querySelector("#section").appendChild(containerCards(data)),
            endpoint: '/character'
        })
    }else if(hash === "#/buscador"){

        let inputBuscador = document.querySelector('#buscador');
        inputBuscador.style.display = 'block';

        inputBuscador.addEventListener("change", (e)=>{
            let nameSearch = e.target.value;
    

            ajax({
                url: axioInstance,
                callback: (data)=> document.querySelector("#section").appendChild(containerCards(data)),
                endpoint: `/character/?name=${nameSearch}`
            })
            
        })
    }else{
        const article = document.createElement("article");
        article.classList.add('container');
       const section = document.querySelector("#section");

       section.appendChild(article);

       ajax({
        url: axioInstance,
        callback: (data)=> article.appendChild(Card(data)),
        endpoint: `/character/${localStorage.getItem('id')}`
    })
    }
}