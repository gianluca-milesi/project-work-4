import {Link} from "react-router-dom";

function Banner(){
    return(
        <div className={"container mx-auto flex justify-between items-center"} style={{backgroundColor:"var(--color-secondary)"}}>
            <img src="http://localhost:3000/StockImg/banner_stock.png" className={`w-2/12`}/>
            <Link to="/registration" className={"px-1.5 py-2.5 b-none rounded-md cursor-pointer font-bold uppercase text-white text-sm md:text-md lg:text-lg ease-in-out duration-500 hover:scale-125"} style={{backgroundColor:"var(--color-primary)"}}>
                <h2>unisciti</h2>
            </Link>
            <div className={`pr-4 font-bold text-right text-sm md:text-md lg:text-lg`}>
                <p>Sei un professionista?</p>
                <p>Unisciti a noi</p>
            </div>
        </div>
    )
}

export default Banner;