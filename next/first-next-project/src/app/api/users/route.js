import {conn} from "@/libs/mariadb"
import { NextResponse } from "next/server"

export const GET = async ()=>{
    const result = await conn.query("SELECT * FROM users")

    console.log(result);

    return NextResponse.json(result);
} 