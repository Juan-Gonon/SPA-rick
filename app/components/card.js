export const Card = (props)=>{
    
    let div = document.createElement("div");

    const img = document.createElement("img");
    const name = document.createElement("span");

    img.setAttribute("src", props.image);
    name.textContent = props.name;


    div.appendChild(img);
    div.appendChild(name);


    return div;
}