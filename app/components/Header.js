export const Header = ()=>{
    let nav = document.createElement("nav");

    nav.classList.add('nav');
    nav.innerHTML = `
        <a href="#/"> Home </a>
        <a href="#/buscador"> Buscador </a>
    `;

    return nav;
}