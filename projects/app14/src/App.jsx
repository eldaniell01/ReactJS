import { useState } from "react"

export const App = () =>{
    const [value, setValue] = useState(10)
    const handleClick = () => console.log('click')
    return(
        <>
            {value}
            <button onClick={handleClick}>reset to zero</button>
        </>
    )
}