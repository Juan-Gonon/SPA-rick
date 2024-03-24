import { Card } from "./card.js";

export const containerCards = (props)=>{
 
    let article = document.createElement("article");
    article.classList.add('container');

    let result = props.map((element)=> article.appendChild(Card(element)));

    console.log(result)
    return article

}