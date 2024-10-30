"use client"
import axios from "axios";
import { useRouter } from "next/navigation";

const Button = ({user_id}) => {
    const router = useRouter()

  return (
    <button 
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={async()=>{
            if(confirm("Estas seguro???")){
                const resp = await axios.delete(`http://localhost:3000/api/users/${user_id}`)

                
                if(resp.status=== 200){
                  router.push("/auth/dashboard/users")
                  router.refresh()
                }
                
            }
        }}
    >
      Eliminar Usuario
    </button>
  );
};

export default Button;
