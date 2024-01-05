import { useState } from "react"

export const App = ()=>{
    // const [left, setLeft] = useState(0)
    // const [right, setRight] = useState(0)
    const [click, setClick] =useState({left:0, right:0})
    // const handleClickLeft =()=>{
    //     const newClick = {
    //         left : click.left +1,
    //         right: click.right
    //     }
    //     setClick(newClick)
    // }

    // const handleClickRight =()=>{
    //     const newClick = {
    //         left : click.left,
    //         right: click.right +1
    //     }
    //     setClick(newClick)
    // }

    // const handleClickLeft =()=>{
    //     const newClick = {
    //         ...click,
    //         left : click.left +1
    //     }
    //     setClick(newClick)
    // }

    // const handleClickRight =()=>{
    //     const newClick = {
    //         ...click,
    //         right: click.right +1
    //     }
    //     setClick(newClick)
    // }

    const handleClickLeft =()=>{
        setClick({...click, left : click.left +1})

    }

    const handleClickRight =()=>{
        setClick({...click, right : click.right +1})
    }
    return(
        <>
            {click.left}
            <button onClick={handleClickLeft} >left</button>
            <button onClick={handleClickRight} >right</button>
            {click.right}
        </>
    )
}