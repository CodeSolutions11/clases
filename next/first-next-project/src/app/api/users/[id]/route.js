import { NextResponse } from "next/server";
import { conn } from "@/libs/mariadb";

export const GET = async (req, {params})=>{
    try {
        
        console.log(params)

        const result = await conn.query(`
            SELECT * FROM users 
            inner join roles
            on users.role_id = roles.role_id
            WHERE email="${params.id}"`)

        console.log(result)

        if(result.length === 0 || result == []){
            return NextResponse(
                {
                    message: "Usuario no encontrado"
                },
                {
                    status: 404
                }
            )
        }

        return NextResponse.json(result[0])

    } catch (error) {
        return NextResponse(
            {
                message: error.message
            },
            {
                status: 500
            }
        )
    }
} 

export const PUT = async (req, {params}) =>{
    try {


        
    } catch (error) {
        return NextResponse.json(
            {
                message: "Usuario no encontrado"
            },
            {
                status: 404
            }
        )
    }
}


export const DELETE = async (req, {params}) => {
    const result = await conn.query(`DELETE FROM users WHERE user_id=${params.id}`)
    try {


        if(result.affectedRows === 0){
            return NextResponse.json(
                {
                    message: "Usuario no encontrado"
                },
                {
                    status: 404
                }
            )
        }

        return NextResponse.json("Usuario eliminado exitosamente")
        
    } catch (error) {
        return NextResponse(
            {
                message: error.message
            },
            {
                status: 500
            }
        )
    }
}