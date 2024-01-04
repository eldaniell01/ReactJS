import { useState } from "react"
import { Show } from "./Show"
import { Button } from "./Button"

export const App=()=>{
    const [counter, setCounter] = useState(0)
    const increment = ()=> setCounter(counter+1)
    const decrement = ()=> setCounter(counter-1)
    const setZero = ()=>setCounter(0)
    console.log('renderizando... ', counter)
    return(
        <>
            <Show counter={counter}/>
            <Button text={'incrementar'} onClick={increment}/>
            <Button text={'decrementar'} onClick={decrement}/>
            <Button text={'0'} onClick={setZero}/>
        </>
    )
}