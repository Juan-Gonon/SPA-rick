export const ajax = (props)=>{
    let {url, callback, endpoint} = props;


       
    url(endpoint).then(({data})=>{
        
        const {results} = data;
        
        if(!results){
            callback(data);
        }else{
            callback(results);
        }

        

    }).catch((error) =>{
        console.log(error.message)
    })
}