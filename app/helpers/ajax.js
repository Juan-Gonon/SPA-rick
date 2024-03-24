export const ajax = (props)=>{
    let {url, callback, endpoint} = props;


       
    url(endpoint).then(({data})=>{
        
        const {results} = data;
        console.log(data)
        callback(results);

    }).catch((error) =>{
        console.log(error.message)
    })
}