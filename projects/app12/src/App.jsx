import { useState } from "react"
import { History } from "./History"
import { Button } from "./Button"
export const App =()=>{
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [click, setClick] = useState([])
    const [total, setTotal] = useState(0)

    const handleLeftClick = () =>{
        setClick(click.concat('L'))
        setLeft(left+1)
        //setTotal(updatedLeft+right)
    }

    const handleRightClick = () =>{
        setClick(click.concat('R'))
        setRight(right+1)
        //setTotal(updatedRight+left)
    }
    return(
        <>
            {left}
            <Button handlClick={handleLeftClick} text='left'/>
            <Button handlClick={handleRightClick} text='right'/>
            
            {right}
            <History click={click}/>
            {/* {<p>total {total}</p>} */}
        </>
    )
}