export const ajax = (props)=>{
    let {url, callback} = props;
    
    fetch(url)
    .then((response)=>{
        console.log(response);
    })
}