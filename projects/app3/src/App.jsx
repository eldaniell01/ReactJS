import { useState } from "react"
import { TextApp } from "./TextApp"

export function App(){
    const [state, setState] =useState(false)
    const text = state? 'hola':'no hola'
    const handleClick = ()=>{
        setState(!state)
    }
    return(
        <>
            <TextApp text={text}/>
            <button onClick={handleClick}>Actualizar</button>
        </>
    )
}
