import { useState } from "react"

export const App = () =>{
    const [age, setAge] = useState(0)
    const [name, setName] = useState('Daniel')
    if(age>10){
        const[foobar, setFoobar] = useState(null)
    }
    for(let i = 0; i<age;i++){
        const [rightWay, setRightWay] = useState(false)
    }
    const notGood =()=>{
        const [x, setX] = useState(-1000)
    }
    
}