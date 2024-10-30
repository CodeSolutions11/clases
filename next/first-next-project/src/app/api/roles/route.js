import { conn } from "@/libs/mariadb";
import { NextResponse } from "next/server";

export const POST = async (req)=>{
    
    try {
        const data = await req.json()
        const {email} = data

        const result = await conn.query(`SELECT * FROM users INNER JOIN roles ON users.role_id = roles.role_id WHERE users.email = ${email}`)

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