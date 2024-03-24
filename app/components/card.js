export const Card = (props)=>{
    
    const div = document.createElement("div");
    const box = document.createElement("div");
    const content = document.createElement("div");

    const img = document.createElement("img");
    const name = document.createElement("h3");
    const h2 = document.createElement("h2");
    const link = document.createElement("a");

    div.classList.add('card');
    box.classList.add('box');
    content.classList.add('content');
    link.classList.add('link');


    
    h2.textContent = props.id < 10 ? `0${props.id}` :props.id;
    img.setAttribute("src", props.image);
    name.textContent = props.name;
    link.setAttribute('href', `#/${props.name}`);
    link.textContent = 'Ver mas';
    link.setAttribute('id', props.id);

    link.addEventListener('click', (e)=>{

        localStorage.setItem('id', e.target.id);
    })

    content.appendChild(h2);
    content.appendChild(name);
    content.appendChild(img);
    content.appendChild(link);
    box.appendChild(content);
    div.appendChild(box);

    return div;
}