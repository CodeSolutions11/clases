import React, { useState } from 'react'
import Button from '../components/Button'


const Layout2 = () => {


    const [contador, setContador] = useState(0)
    const [datos, setDatos] = useState()

    const aumentarClicks = ()=>{
        setContador(contador+1)
    }

    const mostrarDatos = ()=>{
        return (
            setDatos(
                {
                    name:"Mercedes",
                    email:'mercedes@gmail.com',
                    phone: '0414213456'
                }
            )
        )
    }

    const actualizarDatos = () =>{
        setDatos(estadoAnterio => {
            return { ...estadoAnterio, name:'Ewil', email:'ewil@gmail.com'}
        })
    }

  return (
    <div className='bg-black h-screen flex items-center justify-center text-white flex-col'>

        <Button functionBtn={aumentarClicks} content='Nro de clicks'/>

        <p className='text-2xl'>Contador de clicks: <span className='text-red-600 font-bold text-4xl'>{contador}</span></p>

        <section>
            <Button functionBtn={mostrarDatos} content='Mostrar Datos' />
            <Button functionBtn={actualizarDatos} content='Actualizar Datos' />
        </section>

        {datos ? (
            <ul>
                <li>Name: <span className='text-red-600 font-bold text-xl'>{datos.name}</span></li>
                <li>Email: <span className='text-red-600 font-bold text-xl'>{datos.email}</span></li>
                <li>Phone: <span className='text-red-600 font-bold text-xl'>{datos.phone}</span></li>
            </ul>
        ): ''}


    </div>
  )
}

export default Layout2