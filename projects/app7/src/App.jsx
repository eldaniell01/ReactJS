import { useState } from "react"
import { Word } from "./Word"
export function App(){
    const [state, setState] = useState('sdfsdfsdfsdfsdf')
    function handleClick(){
        setState('hola de nuevo')
    }
    return(
        <>
            <h1>cambio de palabra</h1>
            <Word text={state}/>
            <button onClick={handleClick}>Cambiar</button>
        </>
    )
}