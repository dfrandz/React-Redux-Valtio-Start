import { Outlet } from "react-router-dom"
import Header from "@/components/Header"

const HomeLayout = () => {
    return (

        <>
            <div className="flex min-h-screen w-full flex-col ">
                <Header/>
                <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4  p-2 md:gap-8 md:p-2">
                    <Outlet/>
                </main>

            </div>

        </>
    )
}

export default HomeLayout