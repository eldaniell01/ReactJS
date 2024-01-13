export const ListCompany=({data, updateCompany, deleteCompany})=>{
    return(
        <li key={data.id}>{data.name} -- {data.website} -- {data.fundation}
            <button onClick={()=>updateCompany(data.id)}>Actualizar</button>
            <button onClick={()=>deleteCompany(data.id)}>X</button>
        </li>
    )
} 