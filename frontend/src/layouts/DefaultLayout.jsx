import { Outlet } from "react-router-dom"
//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext } from "react"
//Layouts
import Header from "./Header"
import Footer from "./Footer"
//Components


function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)
    
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout