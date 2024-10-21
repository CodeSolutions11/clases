"use client"
import axios from "axios"
import { useRouter } from "next/navigation"

const Solicitudes = ({user}) => {
    console.log(user)

    const router = useRouter()

    const onClick = async ()=>{
        const resp = await axios.post("http://localhost:3000/api/users", user)
        console.log(resp)

        if(resp.status==200){
            router.refresh()
        }
    }

  return (
    <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.referencia_pago}</td>
        <td>{user.plan}</td>
        <td>{user.solicitud_date}</td>
        <td><button onClick={onClick} className='bg-green-500 px-4 rounded-lg py-2'>Activar</button></td>
    </tr>
  )
}

export default Solicitudes