export const containerCards = (props)=>{
    let {results} = props;
    let article = document.createElement("article");
    article.classList.add('card-content');

    results.map((element)=> article.append(card(element)));

    return article

}