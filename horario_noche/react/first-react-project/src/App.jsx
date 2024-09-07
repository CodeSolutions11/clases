import React, { useState } from "react"
import Button from "./components/Button"
import Input from "./components/Input"


const  App = ()=>{
  
  const [name, setName] = useState('user')
  const [contador, setContador] = useState(0)


  const aviso = (content)=>{
    return alert(content)
  }

  const changeColor = ()=>{
    return 'bg-red-700'
  }

  const cambiarNombre = ()=>setName(()=>'Jesus')

  const count = ()=>setContador(()=>contador+1)

  return (
    <div className="bg-black h-screen text-white flex items-center justify-center flex-col">

      <h1 className="text-sky-600 font-bold underline text-[50px]">Primer Proyecto con react</h1>

      <div className="w-full grid grid-cols-2 grid-rows-2  h-[70%] p-5">

        <section className="flex flex-col items-center">
          <button onClick={cambiarNombre} className="border px-1 py-3">Cambiar saludo</button>

          <h3 className="m-6">Saludos a: {name} </h3>
        </section>

        <section className="flex flex-col items-center">
          <Button 
            aviso={aviso} 
            avisoContent="Error!!" 
            styles="bg-red-400" 
            content="Primer Boton" 
          />

          <Button 
            aviso={aviso} 
            avisoContent="Éxito!!" 
            styles="bg-sky-400" 
            content="Segundo Boton" />

          <Button  
            aviso={aviso} 
            avisoContent="Warning!!" 
            styles="bg-green-400" 
            content="Tercer Boton"/>
        </section>

        <section className="flex flex-col items-center">
          <Input 
            placeholder="UserName" 
            styles="text-red-500"
            type='text'/>

          <Input 
            placeholder="Password" 
            styles="text-black  " 
            type='password'/>

          <Input 
            placeholder="Email" 
            styles="text-green-700" 
            type='email'/>

          <Input 
            placeholder="date" 
            styles="text-green-700" 
            type='date'/>
        </section>

        <p className="cursor-pointer" 
          onClick={count}> Número de clicks dados: {contador}</p>
      </div>

      

    </div>
  )
}

export default App