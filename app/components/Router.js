import { ajax } from "../helpers/ajax.js";
import { axioInstance } from "../helpers/urls.js";
import { containerCards } from "./ContainerCard.js";

export const Router = ()=>{
    let {hash} = location;

    console.log(hash)

    if(hash === "" || hash == "#/"){
        ajax({
            url : axioInstance,
            callback: (data)=> document.querySelector("#section").appendChild(containerCards(data)),
            endpoint: '/character'
        })
    }else if(hash === "#/buscador"){
        // document.querySelector("#section").appendChild(containerCards(data)).innerHTML = `<h2> En proceso </h2>`
        let inputBuscador = document.querySelector('#buscador');
        inputBuscador.style.display = 'block';

        inputBuscador.addEventListener("change", (e)=>{
            let nameSearch = e.target.value;
            console.log(nameSearch)

            ajax({
                url: axioInstance,
                callback: (data)=> document.querySelector("#section").appendChild(containerCards(data)),
                endpoint: `/character/?name=${nameSearch}`
            })
            
        })
    }else{

    }
}