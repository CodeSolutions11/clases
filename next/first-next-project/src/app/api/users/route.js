import {conn} from "@/libs/mariadb"
import { NextResponse } from "next/server"

export const GET = async ()=>{
    
    try {
        const result = await conn.query("SELECT * FROM users")

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