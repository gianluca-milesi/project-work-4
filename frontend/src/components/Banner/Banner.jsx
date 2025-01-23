import {Link} from "react-router-dom";
import style from "./Banner.module.css";

const textResponsive = "text-sm md:text-xl lg:text-2xl";

function Banner(){
    return(
        <div className={`${style.banner} container p-0 mx-auto flex justify-between items-center`}>
            <img src="http://localhost:3000/StockImg/banner_stock.png" className={`w-2/12`}/>
            <Link to="/registration" className={`${textResponsive} ${style.registration} px-1.5 py-2.5 b-none rounded-md cursor-pointer font-bold uppercase text-white  ease-in-out duration-500 hover:scale-150`}>
                <h2>unisciti</h2>
            </Link>
            <div className={`${textResponsive} pr-4 font-bold text-right`}>
                <p>Sei un professionista?</p>
                <p>Unisciti a noi</p>
            </div>
        </div>
    )
}

export default Banner;