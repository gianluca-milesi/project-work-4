import style from "./NewHero.module.css"
//Hooks
import { Link } from "react-router-dom"
//Icons
import { IoIosSearch } from "react-icons/io";


function NewHero() {
    return (
        <div className={style.hero}>
            <h1 className="text-7xl z-10 text-black font-semibold">La tua salute <br /> Conta</h1>
            <div className={style.hero_body}>
                <h3 className="text-xl font-semibold">Trova lo specialista che fa per te</h3>
                <p className="mb-[1rem]">Cerca tra più di 200 specialisti di medicina generale in tutta Italia</p>
                <Link to="/search">
                    <button className="custom-button !p-2 flex items-center gap-1"><IoIosSearch className="text-2xl" />Cerca il tuo medico</button>
                </Link>
            </div>
        </div >
    )
}

export default NewHero