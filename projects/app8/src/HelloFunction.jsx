export const HelloFunction =(props)=>{
    const bornYear=()=>{
        return new Date().getFullYear() -props.age
        
    }
    return(
        <>
            <p>
                hola {props.name}, tu edad es {props.age} años
            </p>
            <p>naciste el {bornYear()}</p>
        </>
    )
}