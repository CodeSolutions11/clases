import axios from "axios"


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
            <section className="w-60 p-2 bg-white rounded-xl">
                <h2>Nombre: {user.user_name}</h2>
                <span>Email: {user.user_email}</span>
            </section>
        ))}
    </div>
  )
}

export default UsersPage