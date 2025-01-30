import { Outlet } from "react-router-dom"
//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext } from "react"
//Layouts
import Header from "./Header"
import Footer from "./Footer"
//Components

import loader from "../assets/loader.png"


function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)
    console.log(isLoading)
    
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            {isLoading && (
                <div className="loader">
                    <img src={loader} alt="Loading..." className="loader-image" />
                </div>
            )}
        </>
    )
}

export default DefaultLayout