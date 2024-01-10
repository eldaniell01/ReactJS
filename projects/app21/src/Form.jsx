export const Form =({addName, newName, handleChange, handleChangeN, number})=>{
    return (
        <form onSubmit={addName}>
            <div>name: <input type="text" value={newName} onChange={handleChange}/></div>
            <div>numero <input type="text" value={number} onChange={handleChangeN}/></div>
            <button type="submit">agregar</button>
        </form>
    )
}