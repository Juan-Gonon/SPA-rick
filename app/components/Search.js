export const search = ()=>{
    let input = document.createElement('input');
    input.classList.add('search');
    input.setAttribute('placeholder', 'Busca');
    input.id = "buscador";
    input.style.display = "none";


    return input;
}