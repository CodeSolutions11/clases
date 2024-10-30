import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials:{
                email: {
                    label: "Email",
                    type: "email",
                    placeholder:"Example@gmail.com"
                },
                password: {
                    label: "Password", 
                    type: "password", placeholder:"123456"
                } 
            },
            async authorize(credentials, req){

                console.log(credentials)

                if(credentials.email != "jesus@gmail.com") throw new Error("email invalido")

                return {
                    id: 1,
                    name: "username",
                    email:credentials.email
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // pages:{
    //     signIn:"/pages/login"
    // }
}

const handler = NextAuth(authOptions)

export {
    handler as GET,
    handler as POST
}