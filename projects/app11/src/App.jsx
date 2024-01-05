import { useState } from "react"

export const App = () =>{
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [click, setClick] = useState([])
    
    const handleLeftClick = ()=>{
        setClick(click.push('L'))
        setLeft(left+1)
    }

    const handleRightCLick = ()=>{
        setClick(click.push('R'))
        setRight(right+1)
    }
    return(
        <>
            {left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightCLick}>left</button>
            {right}
            <p>{click.join(' ')}</p>
        </>
    )
}