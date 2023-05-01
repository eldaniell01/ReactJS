import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';



function App() {
  
  const [datos, setDatos] = useState({});

  useEffect(() => {
    async function fetchDatos() {
      const respuesta = await fetch("http://localhost:8000/movies/1");
      const datosJSON = await respuesta.json();
      setDatos(datosJSON);
    }
    fetchDatos();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
      <li >{datos.title}</li>
      </header>
    </div>
  );
}

export default App;
