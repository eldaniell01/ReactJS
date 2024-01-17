import axios from 'axios'
const url = 'http://127.0.0.1:8000/api8/repuesto/'

let token = null

const setToken = newToken=>{
    token = `Token ${newToken}`
}

const getAll =(token)=>{
    console.log('token 1',token)
    const response = axios.get(url, {
        headers: {
          Authorization: `Token ${token}`,
        },
    } )
    console.log('token', response)
    return response.then(res => res.data).catch(error=>{alert('error', error.response)})
}


export default {getAll}