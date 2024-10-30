import {conn} from "@/libs/mariadb"
import { NextResponse } from "next/server"

export const GET = async ()=>{
    
    try {
        const result = await conn.query("SELECT * FROM users INNER JOIN roles ON users.role_id = roles.role_id ")

        console.log(result);

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json(
            {
                message: result.error
            },
            {
                status: 500
            }
        )
    }

} 


export const POST = async (req)=>{
    try {
        const data = await req.json()
        console.log(data)
        const {id, name, email, password} = data

        const result = await conn.query("insert into users set ?",{
            name,
            email,
            password
        })


        //let usuario_id = await conn.query("SELECT MAX(user_id) AS ultimo_usuario FROM users ")

        const eliminar_solicitud = await conn.query(`DELETE FROM solicitudes_usuarios WHERE id=${id}` )

        return NextResponse.json(result)

    } catch (error) {
        return NextResponse.json(
            {
                message: result.error
            },
            {
                status: 500
            }
        )
    }
}