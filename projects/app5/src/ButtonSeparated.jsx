import { useState } from "react"

export function ButtonSeparated(){
    const [state, setState] = useState(0)
    function handleClick(){
        setState(state+1)
    }
    return(
        <button onClick={handleClick}>numero {state}</button>
    )

}