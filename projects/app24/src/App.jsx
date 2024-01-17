import { useEffect, useState } from "react"
import Login from "../services/Login"
import Motos from "../services/Motos"
import axios from "axios"

export const App = ()=>{
    const [username, setUsername] = useState('')
    const [password, setPasssword] = useState('')
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)


    useEffect(()=>{
        console.log(token)
        Motos
        .getAll(token)
        .then(response =>{
            console.log('data ', response.slice(0,3))
        })
        .catch(error => console.log(error.data))

    },[token])

    const handleLogin = async (event)=>{
        event.preventDefault()
        try {
            const users = await Login.login({
                username, password,
            })
            setUser(users)
            setUsername('')
            setPasssword('')
            setToken(users.token)
        } catch (exception){
            console.log('error en las credenciales')
        }
    }

    return(
        <>
            <form onSubmit={handleLogin}>
                <div>
                    Username
                    <input type="text" value={username} name="Username" onChange={({target}) => setUsername(target.value)} />
                </div>
                <div>
                    Password
                    <input type="password" value={password} name="Password" onChange={({target}) =>setPasssword(target.value)}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}