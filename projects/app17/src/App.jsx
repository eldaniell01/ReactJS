export const App = () =>{
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
    return(
        <>
        <h1>notas</h1>
        <ul>
            {notes.map(note=> <li key={note.id}>{note.content}</li>)}
        </ul>
        </>
    )
}