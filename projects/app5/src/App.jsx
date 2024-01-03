import { useState } from "react"
import { ButtonSeparated } from "./ButtonSeparated"
import { ButtonTogether } from "./ButtonTogether"
export function App(){
    const [state, setState] = useState(0)
    function handleClick(){
        setState(state+1)
    }
    return(
        <>
            <h1>Contadores por separado</h1>
            <ButtonSeparated/>
            <ButtonSeparated/>
            <h1>Contadores juntos</h1>
            <ButtonTogether state={state} onClick={handleClick}/>
            <ButtonTogether state={state} onClick={handleClick}/>
        </>
    )
}