import { Link } from "react-router-dom"
import style from "./NotFound.module.css"
import notFoundImg from "../../assets/notFound.png"

function NotFound() {

    return (
        <div className="container flex flex-col lg:flex-row justify-center items-center h-screen">
            <img src={notFoundImg} alt="notFound" className="w-48"/>
            <div className="text-center lg:ml-12">
                <div className="mb-10 font-bold text-4xl">
                    <p>404</p>
                    <p>Pagina non trovata</p>
                </div>
                <Link to="/" className={`${style.homeLink} inline-block text-white px-1.5 py-2.5 b-none cursor-pointer rounded-md font-bold uppercase duration-500 ease-in-out transform hover:scale-125`} >
                    Torna alla home
                </Link>
            </div>
            
        </div>
    )
}

export default NotFound