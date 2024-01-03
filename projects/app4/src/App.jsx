import { useState } from "react"
import { ListWork1 } from "./ListWork1"
import { ListWork2 } from "./ListWork2"
export function App(){
    const [state, setState] = useState(false)
    const change = state? <ListWork1/>: <ListWork2/>
    const handleClick =()=>{
        setState(!state)
    }
    return(
        <>
            {change}
            <button onClick={handleClick}>
                Cambiar 
            </button>
        </>
    )
}