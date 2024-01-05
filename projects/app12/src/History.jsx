export const History =(props)=>{
    if(props.click.length===0){
        return(
            <div>la aplicacion se usa con los botones</div>
        )
    }
    return(
        <div>
            botton historico: {props.click.join(' ')}
        </div>
    )
}