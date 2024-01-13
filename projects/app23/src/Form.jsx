export const Form =({placeholder, update, company, chageName, changeWebsite, changeFundation, onSubmit, edit, cancel})=>{
    return(
        <>
            <form onSubmit={onSubmit}>
                <section>
                    <input type="text" placeholder={placeholder[0]} value={company.name} onChange={chageName}/>
                    <input type="text" placeholder={placeholder[1]} value={company.website} onChange={changeWebsite}/>
                    <input type="text" placeholder={placeholder[2]} value={company.fundation} onChange={changeFundation}/>
                </section>
                {edit?(
                    <>
                        <button type='button' onClick={()=>update(edit)}>Actualizar</button> 
                        <button onClick={cancel}>Cancelar</button>
                    </>
                ): <button type="submit">Agregar</button>}
            </form>
        </>
    )
}