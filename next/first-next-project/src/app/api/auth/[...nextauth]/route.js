import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { conn } from "@/libs/mariadb";
import bcrypt from "bcrypt"


export const authOptions = {
    providers: [
        CredentialsProvider(
        {
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "email", placeholder:"Example@gmail.com"},
                password: {label: "Password", type: "password", placeholder:"123456"} 
            },
            async authorize(credentials, req){
                console.log(credentials)
                console.log(req)

                const userFound = await conn.query(`SELECT * FROM solicitudes_usuarios where email="${credentials.email}"`)

                console.log(userFound[0])
                if(!userFound && userFound == []) throw new Error("user not found")

                const matchPassword = await bcrypt.compare(credentials.password, userFound[0].password)
                
                if(!matchPassword) throw new Error("contraseña inválida")
                console.log(matchPassword)



                return {
                    id: userFound[0].id,
                    name: userFound[0].name,
                    email: userFound[0].email
                }
            }
            

        })

    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn: "/auth/login"
    }

}

const handler = NextAuth(authOptions)

export {
    handler as GET,
    handler as POST
}