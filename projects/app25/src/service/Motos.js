import axios from 'axios'
const url = 'http://127.0.0.1:8000/api8/repuesto/'
const url2 = 'http://127.0.0.1:8000/api8/moto/'
const url3 = 'http://127.0.0.1:8000/api8/proveedor/'

let tt = null
const setToken = newToken =>{
    tt = `Token ${newToken}`
}
const getAll = (token) => {
    const response = axios.get(url, {
        headers: {
            Authorization: `Token ${token}`,
        },
    })
    return response.then(res=>res.data).catch(error=>alert(error))
}

const getMotos = (token)=>{
    const response = axios.get(url2, {
        headers: {
            Authorization: `Token ${token}`,
        },
    })
    return response.then(res=>res.data).catch(error=>alert(error))
}

const getProveedor = (token)=>{
    const response = axios.get(url3, {
        headers: {
            Authorization: `Token ${token}`,
            
        },
    })
    return response.then(res=>res.data).catch(error=>alert(error))
}

const postData = async data =>{
    const config= {
        headers:{Authorization: tt, 'Content-Type': 'multipart/form-data'},
    }
    
    try{
        const response = await axios.post(url, data, config)
        return response.then(res => res.data).catch(error=>alert(error))
    }catch(error){
        alert(error)
    }
}

const updateData = async (id, data)=>{
    const config= {
        headers:{Authorization: tt, 'Content-Type': 'multipart/form-data'},
    }
    const formData = new FormData()
    Object.entries(data).forEach(([key, value])=>{
        formData.append(key, value)
    })
    try{
        const response = await axios.put(url+id+'/', formData, config)
        return response.then(res=>res.data).catch(error=>alert(error))
    }catch(error){
        alert(error)
    }
}

const deleteData = id =>{
    const config= {
        headers:{Authorization: tt, 'Content-Type': 'multipart/form-data'},
    }
    const response = axios.delete(url+id+'/', config)
    return response.then(res =>res.data).catch(error=>alert(error))
}

export default {getAll, postData, getMotos, getProveedor,setToken, updateData, deleteData}