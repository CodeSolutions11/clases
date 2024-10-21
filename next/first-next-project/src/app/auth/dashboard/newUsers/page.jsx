import axios from "axios"
import Solicitudes from "@/components/Solicitudes"

const loadSolicitudes = async ()=>{
  const {data} = await axios.get("http://localhost:3000/api/solicitudes")

  console.log(data)

  return data
}

const NewUsers = async () => {
  const nuevas_solicitudes = await loadSolicitudes()

  return (
    <div className='h-[100%] flex items-center justify-center flex-col'>
      <h1>Solicitudes de Usuarios</h1>

      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Referencia de Pago</th>
            <th>Plan</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {nuevas_solicitudes.map(solicitud => (
            <Solicitudes user={solicitud} key={solicitud.id}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default NewUsers