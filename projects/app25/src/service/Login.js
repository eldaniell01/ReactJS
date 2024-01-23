import axios from 'axios'

const url = 'http://127.0.0.1:8000/api9/login/'

const login = async credentials =>{
    const response = await axios.post(url, credentials)
    return response.data
}

export default {login}