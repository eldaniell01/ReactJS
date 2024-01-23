import { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Login from './service/Login'
import Motos from './service/Motos'
export const App = ()=>{
    const [datas, setDatas] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [product, setProduct] = useState({code: '', description:null, id_moto:'', id_proveedor:'', image:'', name:'', price:'', state:false, stock:''})
    const [motos, setMotos] = useState([])
    const [proveedores, setProveedores] = useState([])
    const [edit, setEdit]=useState(null)
    const [token, setToken] = useState(null)


    useEffect(()=>{
        if (token){
            Motos.setToken(token)
            Motos
            .getAll(token)
            .then(response =>{
                console.log(response.slice(0,3))
                setDatas(response.slice(0,3))
            })
            Motos
            .getMotos(token)
            .then(response =>{
                setMotos(response)
                console.log(motos)
            })
            Motos
            .getProveedor(token)
            .then(response=>{
                setProveedores(response)
                console.log(proveedores)
            })
        }
    },[setMotos, token])

    const postProduct = (event) =>{
        event.preventDefault()

        const productObject={
            code: product.code,
            name: product.name,
            description: product.description,
            price: product.price,
            stock: parseInt(product.stock),
            state: product.state,
            image: product.image,
            id_proveedor: parseInt(product.id_proveedor),
            id_moto: parseInt(product.id_moto)
        }
        Motos
        .postData(productObject)
        .then(response=>{
            console.log(response)
        })
        
    }

    useEffect(()=>{
        if(edit){
            console.log(edit)
            const filter = datas.filter(x=>x.id===edit)
            console.log('filtro',filter)
            setProduct(filter[0])
            console.log(product.id_proveedor)
            
        }
    },[edit])

    const handleLogin = async (event)=>{
        event.preventDefault()
        try{
            const user = await Login.login({username, password})
            setUsername('')
            setPassword('')
            setTimeout(()=>{setToken(user.token)},3000)
            
        } catch (exception){
            console.log('error con las credenciales')
        }
    }

    const handleLogout=()=>{
        setToken(null)
        setDatas([])
        setMotos([])
        setProveedores([])
    }

    const handleUpdate=(id)=>{
        setEdit(id)
    }
    const handleUpdateCancel=()=>{
        setEdit(null)
        setProduct({code: '', description:null, id_moto:'', id_proveedor:'', image:'', name:'', price:'', state:false, stock:''})
        setMotos([])
        setProveedores([])
    }
    
    const update = id =>{
        const productObject={
            code: product.code,
            name: product.name,
            description: product.description,
            price: product.price,
            stock: parseInt(product.stock),
            state: product.state,
            image: product.image,
            id_proveedor: parseInt(product.id_proveedor),
            id_moto: parseInt(product.id_moto)
        }
        Motos
        .updateData(id, productObject)
        .then(response=>{
            console.log(response)
        })
    }

    const handleDelete = id =>{
        Motos
        .deleteData(id)
        .then(response=>{
            console.log(response)
            setEdit(null)
        })
    }

    return(
        <>
            {token? (
            <>
                <Form data-bs-theme="dark" onSubmit={postProduct} encType="multipart/form-data">
                    <FloatingLabel controlId="floatingInput" label="Código" className="mb-3">
                        <Form.Control type="text" placeholder="name" value={product.code} onChange={({target})=> setProduct(prev =>({...prev, code:target.value}))}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Nombre del Producto" className="mb-3">
                        <Form.Control type="text" placeholder="name" value={product.name} onChange={({target})=>setProduct(prev=>({...prev, name:target.value}))}/>
                    </FloatingLabel>
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" className="mb-3" accept="image/*" onChange={({target})=>setProduct(prev=>({...prev, image:target.files[0] }))} />
                    <FloatingLabel controlId="floatingInput" label="Descripción" className="mb-3" value={product.description} onChange={({target})=>setProduct(prev=>({...prev, description:target.value}))}>
                        <Form.Control as="textarea"  rows={3} placeholder="name" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Precio" className="mb-3">
                        <Form.Control type="text" placeholder="name" value={product.price} onChange={({target})=>setProduct(prev=>({...prev, price:target.value}))} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Stock" className="mb-3">
                        <Form.Control type="text" placeholder="name" value={product.stock} onChange={({target})=>setProduct(prev=>({...prev, stock:target.value}))}/>
                    </FloatingLabel>
                    <Form.Select aria-label="Default select example" className="mb-3" value={product.id_moto} onChange={({target})=>setProduct(prev=>({...prev, id_moto:target.value}))}>
                        <option>Seleccionar moto</option>
                        {motos.map(moto=><option key={moto.id} value={moto.id}>{moto.name}</option>)}
                    </Form.Select>
                    <Form.Select aria-label="Default select example" className="mb-3" value={product.id_proveedor} onChange={({target})=>setProduct(prev=>({...prev, id_proveedor:target.value}))} >
                        <option>Seleccionar Proveedor</option>
                        {proveedores.map(proveedor=><option key={proveedor.id} value={proveedor.id}>{proveedor.name}</option>)}
                    </Form.Select>
                    {edit?(
                        <Container className="d-flex justify-content-between mb-3">
                                <Button variant="secondary" onClick={()=>update(edit)}>Actualizar</Button>
                                <Button variant="secondary" onClick={handleUpdateCancel}>Cancelar</Button>
                        </Container> 
                    ):(
                        <Container className="d-flex justify-content-between mb-3">
                            <Button type='submit' variant="secondary" >Registrar</Button>
                            <Button variant="secondary" onClick={handleLogout}>Salir</Button> 
                        </Container>
                    ) }
                </Form>
                <ul>
                    {datas.map(list => <li key={list.id}>{list.name} <button onClick={()=>handleUpdate(list.id)}>Update</button> <button onClick={()=>handleDelete(list.id)}>Eliminar</button> </li>)}
                </ul>
            </>
            ):(
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" >
                    <center><h4>Usuario</h4></center>
                    <Form.Control type="text" placeholder="usuario" value={username} onChange={({target})=>setUsername(target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <center><h4>Contraseña</h4></center>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={({target})=>setPassword(target.value)}/>
                </Form.Group>
                <Button type='submit' variant="secondary">Login</Button>
            </Form>
            )}
            
        </>
    )
}