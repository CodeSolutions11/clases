"use client"
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation"; 

const Login = () => {

    const [error, setError] = useState(null)
    const router = useRouter()

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm()

    const onSubmit = handleSubmit( async data =>{
        console.log(data);

        const resp = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false
        })

        console.log(resp)

        if(resp.error){
            setError(resp.error)
        }else{
            router.push("/dashboard")
            router.refresh()
        }
    })

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <form 
        className="flex flex-col bg-slate-400"
        onSubmit={onSubmit}
      >
        <label htmlFor="email">Email</label>
        <input className="px-4 py-1" type="email" 
            {...register("email", {
                required:{
                    value: true,
                    message:"Campo requerido"
                },
                pattern:{
                    value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
                    message: "Email no válido"
                }
            })}
        />
        {errors.email && <span className="text-sm text-red-700">{errors.email.message}</span>}


        <label htmlFor="password">password</label>
        <input className="px-4 py-1" type="password" 
            {...register("password",{
                required:{
                    value:true,
                    message:"Campo requerido"
                },
                minLength:{
                    value:6,
                    message:"La contraseña debe tener minimo 6 caracteres"
                }
            })}
        />
        {errors.password && <span className="text-sm text-red-700">{errors.password.message}</span>}
        <input type="submit" />

        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </form>
    </div>
  );
};

export default Login;
