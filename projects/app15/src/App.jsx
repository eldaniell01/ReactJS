import { useState } from "react"

export const App = () =>{
    const [value, setValue] = useState(10)

    // const hello = (who) =>{
    //     const handler = ()=>console.log('hola', who)
    //     return handler
    // }

    const setToValue = (newValue) =>{
        console.log('value now', newValue)
        setValue(newValue)
    }

    return(
        <>
            {value}
            <button onClick={()=>setToValue(1000)} >button</button>
            <button onClick={()=>setToValue(0)} >button</button>
            <button onClick={()=>setToValue(value+1)} >button</button>
        </>
    )
}

