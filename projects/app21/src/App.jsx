import { useState } from "react"
import { Number } from "./Number"
import { Filter } from "./Filter"
import { Form } from "./Form"
export const App = ()=>{
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
      ])
    const [newName, setNewName] = useState('')
    const [number, setNumber] = useState('')
    const [search, setSearch] = useState('')

    const addName=(event)=>{
        event.preventDefault()
        const newn = persons.some(person => person.name===newName)
        const num = persons.some(numb =>numb.number===number.toString())
        if (newn){
            alert(newName +' '+ number+ ' ya esta')
        }else if(num){
            alert(newName +' '+ number+ ' ya esta')
        }else{
            setPersons(persons.concat({name: newName, number:number}))
            setNewName('')
            setNumber('')
        }
    }

    const handleChange = (event) => {
        setNewName(event.target.value)
    }
    const handleChangeN = (event) => {
        setNumber(event.target.value)
    }
    const onSearch =(event)=>{
        setSearch(event.target.value);
    }
    const filtrado = persons.filter(person=>{
        const text = person.name.toLowerCase()
        const buscar = search.toLowerCase()
        return text.includes(buscar)
    })
    console.log(filtrado)
    return(
        <>
            <h1>fildtrar</h1>
            <div>
                <Filter value={search} onChange={onSearch}/>
            </div>
            <h1>agenda</h1>
            <Form 
                addName={addName} 
                newName={newName} 
                number={number} 
                handleChange={handleChange} 
                handleChangeN={handleChangeN}
            />
            <h2>numeros</h2>
            <ul>
                {filtrado.map(person => <Number key={person.name} name={person}/>)}
            </ul>
        </>
    )
}