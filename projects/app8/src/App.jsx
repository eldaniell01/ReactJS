import { Hello } from "./Hello"
import { HelloFunction } from "./HelloFunction"
import { HelloDestructuring } from "./HelloDestructuring"
export const App = ()=>{
    const name = 'peter'
    const age = 10
    return(
        <>
            <h1>saludos</h1>
            <Hello name='Daniel' age= {6+20}/>
            <Hello name={name} age={age}/>
            <HelloFunction name='Alvaro' age={6+20} />
            <HelloFunction name={name} age={age} />
            <HelloDestructuring name='Alvaro' age={7+20} />
            <HelloDestructuring name={name} age={age} />
        </>
    )
}