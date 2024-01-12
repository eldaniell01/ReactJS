import axios from 'axios'
import { useEffect, useState } from 'react'

export const App = ()=>{
    const [datas, setDatas] = useState([])
    const [company, setCompany] = useState({name:'', website:'', fundation:'' })
    const [filter, setFilter] = useState({name:'', website:'', fundation:'' })
    const [edit, setEdit]=useState(null)

    const companies = datas?.companies||[];
    

    const handleChangeName = (event) => {
        if(edit){
            setFilter({...filter, name:event.target.value})
        }else{
            setCompany(prevCompany =>({...prevCompany, name:event.target.value}))
        }
    }

    const handleChangeWebsite = (event) => {
        if(edit){
            setFilter({...filter, website:event.target.value})
        }else{
            setCompany(prevCompany =>({...prevCompany, website:event.target.value}))
        }
    }

    const handleChangeFundation = (event) => {
        console.log(company)
        if(edit){
            setFilter({...filter, fundation:event.target.value})
        }else{
            setCompany(prevCompany =>({...prevCompany, fundation:event.target.value}))
        }
    }

    useEffect(()=>{
        axios
            .get('http://127.0.0.1:8000/api2/companies/')
            .then(response =>{
                setDatas(response.data)
            })
    },[setDatas])

    const addCompany = (event)=>{
        event.preventDefault()
        const companyObject={
            name: company.name,
            website: company.website,
            fundation: parseInt(company.fundation)
        }
        axios
            .post('http://127.0.0.1:8000/api2/companies/', companyObject)
            .then(response =>{
                setDatas(datas.concat(response.data)) 
                setCompany({ name: '', website: '', fundation: '' })
            })
        
    }
   
    const putCompany= id =>{
        const url =' http://127.0.0.1:8000/api2/companies/'+id
        console.log(url)
        const companyObject={
            name: filter.name,
            website: filter.website,
            fundation: parseInt(filter.fundation)
        }
        
        console.log('data',companyObject)
        axios.put(url, companyObject).then(response =>{
            console.log(response.data)
            setEdit(null)
            setFilter({ name: '', website: '', fundation: '' })
        })
        
        
        
    }
    
    const deleted = (id) =>{
        const urls = 'http://127.0.0.1:8000/api2/companies/'+id
        axios
            .delete(urls)
            .then(response=>{
                console.log(response.data)
            })
    }
    useEffect(()=>{
        if(edit){
            console.log(edit)
            const filtro = companies.filter(x=>x.id===edit)
            setFilter(filtro[0])
            console.log(filter)
        }
    }, [edit])

    const cancel =()=>{
        setEdit(null)
    }
    console.log('filtro',filter)
   
    return(
        <>
            <h1>obtencion de datos del backend</h1>
            <form onSubmit={addCompany}>
                <section>
                    <input type="text" value={edit?filter.name:company.name} onChange={handleChangeName} placeholder='Compania'/>
                    <input type="text" value={edit?filter.website:company.website} onChange={handleChangeWebsite} placeholder='Sitio Web'/>
                    <input type="text" value={edit?filter.fundation:company.fundation} onChange={handleChangeFundation} placeholder='Fundación'/>
                </section>
                 
                {edit?(<><button type='button' onClick={()=>putCompany(edit)}>Actualizar</button> <button onClick={cancel}>Cancelar</button></>):<button type="submit">Agregar</button>}
                
            </form> 
            
            <h2>lista</h2>
            <ul>
                {companies.map(data=><li key={data.id}>{data.name} {data.website} {data.fundation} <button onClick={()=>setEdit(data.id)}>actualizar</button> <button onClick={()=>deleted(data.id)}>Eliminar</button> </li>)}
            </ul>
            
        </>
    )
}