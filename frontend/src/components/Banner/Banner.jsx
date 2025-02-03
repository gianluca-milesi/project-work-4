import { Link } from "react-router-dom";
import style from "./Banner.module.css";

const textResponsive = "text-sm md:text-xl lg:text-2xl";


function Banner() {
    return (
        <div className={`${style.banner} p-0 mx-auto flex justify-between items-center`}>
            <img src="http://localhost:3000/StockImg/banner_stock.png" className={`w-2/12`} />
            <Link to="/registration"><button className={`${style.join_button} custom-button !p-2 text-xs sm:text-lg`}>Unisciti a noi</button></Link>
            <div className={`${textResponsive} text-xs md:pr-4 font-bold text-right`}>
                <p>Sei un professionista?</p>
                <p>Registrati su BDoctors</p>
            </div>
        </div>
    )
}

export default Banner;