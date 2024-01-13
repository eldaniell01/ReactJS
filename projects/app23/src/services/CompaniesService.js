import axios from 'axios'
const url = 'http://127.0.0.1:8000/api2/companies/'


//get data
const getAll = ()=>{
    const request = axios.get(url)
    return request.then(response => response.data).catch(error=>{alert('error')})
}

//create data
const createCompany= newObject =>{
    const request = axios.post(url, newObject)
    return request.then(response => response.data).catch(error=>{alert('error')})
}

//update data
const updateCompany = (id,  newObject) =>{
    const request = axios.put(url+id, newObject)
    return request.then(response =>response.data).catch(error=>{alert('error')})
}

const deleteCompany = id =>{
    const request = axios.delete(url+id)
    return request.then(response =>response.data).catch(error=>{alert('error')})
}

export default {getAll, createCompany, updateCompany, deleteCompany}

