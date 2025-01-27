import { Link } from "react-router-dom"
import style from "./NotFound.module.css"
import notFoundImg from "../../assets/notFound.png"

function NotFound() {
    return (
        <div className="container flex flex-col lg:flex-row justify-center items-center absolute inset-0">
            <img src={notFoundImg} alt="notFound" className="w-48"/>
            <div className="text-center lg:ml-12">
                <div className="mb-10 font-bold text-4xl">
                    <p>404</p>
                    <p>Pagina non trovata</p>
                </div>
                <Link to="/" className={`${style.homeLink} text-white px-1.5 py-2.5 b-none rounded-md cursor-pointer font-bold uppercase ease-in-out duration-700 hover:scale-150`}>
                Torna alla Home
                </Link>
            </div>
            
        </div>
    )
}

export default NotFound