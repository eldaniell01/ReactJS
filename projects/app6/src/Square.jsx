import { useState } from "react"

export function Square({value, onSquareCLick}){
    const [state, setState] = useState(null)
    function handleClick(){
        setState('X')
    }
    return(
        <button className="square" onClick={onSquareCLick}>{value}</button>
    )
}