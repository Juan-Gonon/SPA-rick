export const ajax = (props)=>{
    let {url, callback} = props;
       
    url('/character').then(({data})=>{
        
        const {results} = data;
        console.log(results)

        

    }).catch((error) =>{
        console.log(error.message)
    })
}