import { useState } from "react"
import { Button } from "./Button"
export const App = ()=>{
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    const handleGoodClick = () =>{
        const update = good +1
        setGood(update)  
        console.log(update)
        setTotal(update+neutral+bad)
    }
    const handleNeutralClick = () =>{
        const update = neutral+1
        setNeutral(update)  
        setTotal(update+good+bad)      
    }
    const handleBadClick = () =>{
        const update = bad+1
        setBad(update) 
        setTotal(update+neutral+good)       
    }
  
    
    return (
        <>
            <h1>votar</h1>
            <Button handleClick={handleGoodClick} text='bueno'/>
            <Button handleClick={handleNeutralClick} text='regular'/>
            <Button handleClick={handleBadClick} text='malo'/>
            {good}
            {neutral}
            {bad}
            <h2>estadisticas</h2>
            <p>bueno {(10*good)/100}</p>
            <p>regular {(10*neutral)/100}</p>
            <p>malo {(10*neutral)/100}</p>
            <p>total {total}</p>
            
        </>
    )
}