import {conn} from "@/libs/mariadb"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"


export const POST = async (req)=>{
    try {
        const data = await req.json()
        console.log(data);
        let {name, email, password, plan, referencia_pago} = data

        password = await bcrypt.hash(password, 5)

        plan = parseInt(plan)

        const solicitud_date = new Date()

        console.log(password);

        const result = await conn.query("INSERT INTO solicitudes_usuarios set ?", {
            name,
            email,
            password,
            plan,
            referencia_pago,
            solicitud_date

        })

        return NextResponse.json(result)

    } catch (error) {
        return NextResponse.json(
            {
                message: error.message
            },
            {
                status: 500
            }
        )
    }
}