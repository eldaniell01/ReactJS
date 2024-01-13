import { useEffect, useState } from "react"
import { Form } from "./Form"
import { ListCompany } from "./ListCompany"
import CompaniesService from "./services/CompaniesService"

export const App =()=>{
    //states
    const [datas, setDatas] =useState([])
    const [company, setCompany] = useState({name:'', website:'', fundation:'' })
    const [edit, setEdit]=useState(null)

    //effects
    useEffect(()=>{
        CompaniesService
            .getAll()
            .then(initial =>{
                setDatas(initial.companies)
            })
    },[edit])

    useEffect(()=>{
        if(edit){
            console.log(edit)
            const filter = datas.filter(x=>x.id===edit)
            setCompany(filter[0])
        }
    },[edit])

    //functions
    const changeName = (event)=>{
        setCompany(prev =>({...prev, name:event.target.value}))
    }

    const changeWebsite = (event)=>{
        setCompany(prev =>({...prev, website:event.target.value}))
    }

    const changeFundation = (event)=>{
        setCompany(prev =>({...prev, fundation:event.target.value}))
    }

    const addCompany = (event)=>{
        const companyObject={
            name: company.name,
            website: company.website,
            fundation: parseInt(company.fundation)
        }
        CompaniesService
            .createCompany(companyObject)
            .then(initial =>{
                setDatas(datas.concat(initial))
                setCompany({ name: '', website: '', fundation: '' })
            })
    }

    const update =(id)=>{
        setEdit(id)
    }

    const cancel =()=>{
        setCompany({ name: '', website: '', fundation: '' })
        setEdit(null)
    }

    const updateCompnay = id =>{
        const companyObject={
            name: company.name,
            website: company.website,
            fundation: parseInt(company.fundation)
        }
        CompaniesService
            .updateCompany(id, companyObject)
            .then(response =>{
                console.log(response)
                setEdit(null)
                setCompany({ name: '', website: '', fundation: '' })
            })
    }

    const deleteCompany= id=>{
        CompaniesService
            .deleteCompany(id)
            .then(response => {
                console.log(response)
                setEdit(null)
            })
    }
    

    
    const placeholder = ['Nombre de la empresa', 'Sitio Web', 'Fundación']
    return(
        <>
            <h1>Aplicacion de Empresas</h1>
            <h3>Formulario</h3>
            <Form 
                placeholder={placeholder}
                chageName={changeName}
                changeWebsite={changeWebsite}
                changeFundation={changeFundation} 
                company={company}
                onSubmit={addCompany}
                edit={edit}
                cancel={cancel}
                update={updateCompnay}
            />
            <h3>Lista</h3>
            <ul>
                {datas.map(list => <ListCompany key={list.id} data={list} updateCompany={update} deleteCompany={deleteCompany}/>)}
            </ul>
        </>
    )
}