import { useState } from "react"
import { Note } from "./Note"
export const App = ()=>{
    const notes = [
        {
          id: 1,
          content: 'HTML is easy',
          important: true
        },
        {
          id: 2,
          content: 'Browser can execute only JavaScript',
          important: false
        },
        {
          id: 3,
          content: 'GET and POST are the most important methods of HTTP protocol',
          important: true
        }
    ]
    const [not, setNot] = useState(notes)
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)
    const addNote =(event) =>{
        event.preventDefault()
        const noteObject ={
            content: newNote,
            important: Math.random()<0.5,
            id: not.length+1
        }
        setNot(not.concat(noteObject))
        setNewNote('')
    }

    const handleNoteChange = (event) =>{
        console.log(event.target.value)
        setNewNote(event.target.value)
    }
    
    const notesToShow = showAll?not:not.filter(note =>note.important===true)
    return (
        <>
        <h1>Notas</h1>
        <div>
            <button onClick={()=>setShowAll(!showAll)}>mostrar {showAll? 'importante': 'todo'}</button>
        </div>
        <ul>
            {notesToShow.map(note => <Note key={note.id} notes={note}/>)}
        </ul>
        <form onSubmit={addNote}>
            <input type="text" value={newNote} onChange={handleNoteChange}/>
            <button type="submit">save</button>
        </form>
        </>
    )
}