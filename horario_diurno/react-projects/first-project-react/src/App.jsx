import React from 'react'
import Button from './components/button/Button'
import Nav from './components/nav/Nav'
import logo from './img/LOGO.png'
import Home from './pages/home/Home'
import Login from './pages/login/Login'

import { useState } from 'react'

const App = () => {

  const [color, setColor] = useState('rojo')
  const [count, setCount] = useState(0)

  const [user, setUser] = useState({
    nombre:'Jesus',
    edad: 27,
    correo: 'jesus@gmail.com'
  })

  console.log(color);

  const handleColor = ()=>{
    if(color == "azul"){

      setColor("rojo")
    }else{
      setColor("azul")

    }
  }

  const handleCount = ()=>{
    setCount(count+1)
  }

  const updateUser = ()=>{
    setUser(previousState => {
      return { ...previousState, correo:"ewil@gmail.com"}
    })
  }

  return (
    <div>
      <Nav logo={logo} />

      <h3>Sección de botones en react</h3>

      <Button
        handleColor={handleColor}
        attr={'btn'} 
        content={'Boton'} />


      <Button attr={'warning'} content={'Warning'} />
      <Button attr={'success'} content={'Registrar'} />

      <button onClick={handleColor}>El color es: {color}</button>

      <button onClick={handleCount}>click</button>
      <span>La cuenta es: {count}</span>


      <ul>
        <li>Nombre: {user.nombre}</li>
        <li>Edad: {user.edad}</li>
        <li>Correo: {user.correo}</li>
      </ul>

      <button onClick={updateUser}>Actualizar</button>
    </div>
  )
}

export default App