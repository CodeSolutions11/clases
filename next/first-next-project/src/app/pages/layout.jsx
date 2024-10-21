import Navbar from "@/components/Navbar"

export default function Layout({children}){
    return (
        <div className="grid grid-rows-[10vh,1fr]">
            <Navbar />
            <main>{children}</main>
        </div>
    )
}