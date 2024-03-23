import { Card } from "./card.js";

export const containerCards = (props)=>{
 
    let article = document.createElement("article");
    article.classList.add('card-content');

    props.map((element)=> article.appendChild(Card(element)));

    return article

}