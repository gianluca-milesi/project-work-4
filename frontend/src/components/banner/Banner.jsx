import style from "./Banner.module.css";
import {Link} from "react-router-dom";

function Banner(){
    return(
        <div className={`container ${style.banner}`}>
            <img src="http://localhost:3000/StockImg/banner_stock.png" className={style.image}/>
            <Link to="/registration" className={style.btn}><h2>unisciti</h2></Link>
            <div className={style.text}>
                <p>Sei un professionista?</p>
                <p>Unisciti a noi</p>
            </div>
        </div>
    )
}

export default Banner;