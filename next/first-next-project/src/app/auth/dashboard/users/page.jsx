import axios from "axios"
import Link from "next/link"


const loadUsers = async ()=>{
    const {data} = await axios.get("http://localhost:3000/api/users")

    return data
}

const UsersPage = async () => {

    const users = await loadUsers()

    console.log(users);

  return (
    <div className="min-h-screen w-full bg-slate-700 flex justify-center items-center flex-wrap gap-1">
        {users.map(user => (
            <Link href={`/auth/dashboard/users/${user.user_id}`} className="w-60 p-2 bg-white rounded-xl">
                <h5>Nombre: {user.name}</h5>
                <span>Email: {user.email}</span>
            </Link>
        ))}
    </div>
  )
}

export default UsersPage