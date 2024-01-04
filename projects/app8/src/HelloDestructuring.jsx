export const HelloDestructuring =({name, age})=>{
    const bornYear=()=>{
        return new Date().getFullYear() - age
        
    }
    return(
        <>
            <p>
                hola {name}, tu edad es {age} años
            </p>
            <p>naciste el {bornYear()}</p>
        </>
    )
}