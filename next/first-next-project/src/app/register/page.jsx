'use client'

import { useForm } from "react-hook-form";

const Register = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    console.log(watch().nombre);

    return (
    <div className='bg-slate-400 min-h-screen flex items-center justify-center'>
        <form 
            className='flex flex-col'    
        >
            <label htmlFor="nombre">Nombre</label>
            <input 
                type="text"
                placeholder="ingresar nombre"
                {...register("nombre", {
                    required: {
                        value: true,
                        message: "campo requerido"
                    },
                    minLength:{
                        value:2,
                        message: "El nombre debe terner minimo 2 caracteres"
                    }
                })}
            />
            {errors.nombre && <span>{errors.nombre.message}</span>}


            <label htmlFor="">Email</label>
            <input 
                type="email" 
                {...register("email", {
                    required: {
                        value: true,
                        message: "campo requerido"
                    }
                    
                })}
            />

            <input type="submit" />

            <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </form>
    </div>
  )
}

export default Register