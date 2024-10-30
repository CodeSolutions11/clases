import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import axios from "axios";

// const loadUSer =async()=>{
//   const sesion = await getServerSession(authOptions);
//   const user = sesion.user;
//   const {data} = await axios.get("http://localhost:3000/api/roles", user.email)

//   return data
// }

const Sidebar = async () => {
  const sesion = await getServerSession(authOptions);
  const user = sesion.user;
  console.log(user);



  return (
    <aside className="bg-slate-400">
      <div className="h-[20%] flex flex-col justify-center text-center">
        <h1 className="text-4xl">{user.name}</h1>
        <span className="text-white">{user.email}</span>
      </div>
      <div className="h-[60%] flex flex-col gap-[2rem] items-center">
        {user.email == "admin@admin.com" ? (
          <>
            <Link href="/auth/dashboard">Dashboard</Link>
            <Link href="/auth/dashboard/newUsers">Solicitudes de usuarios</Link>
            <Link href="/auth/dashboard/users">usuarios Activos</Link>
            <Link href="/api/auth/signout">Cerrar Sesión</Link>
          </>
        ) : (
          <>
            <Link href="/auth/dashboard">Dashboard</Link>
            <Link href="/auth/dashboard/tareas">Tarea del dia</Link>
            <Link href="/auth/dashboard/retiro">Retiro de dinero</Link>
            <Link href="/auth/dashboard/cuentaUser">Cuenta de retiro</Link>
            <Link href="/auth/dashboard/updatePassword">
              Cambiar Contraseña
            </Link>
            <Link href="/api/auth/signout">Cerrar Sesión</Link>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
