import style from "./DoctorCard.module.css"
import docImage from "../../assets/DottoreQuindici.jpg"
import { Link } from "react-router-dom"

function DoctorCard() {
    return (
        <div className={`${style.card} lg:flex lg:items-center`}>
            <figure className="">
                <img className={`${style.doc_image} md:w-80 lg:w-96 xl:w-52`} src={docImage} />
            </figure>
            <div className={style.card_body}>
                <h3 className="text-lg font-semibold">Nome Cognome</h3>
                <div className={style.doc_contacts}>
                    <h5>Contatti</h5>
                    <div className="xl:flex gap-3">
                        <p className="text-sm flex items-center gap-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <span className="italic text-neutral-500">Email: </span>doc@gmail.com</p>
                        <p className="text-sm flex items-center gap-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <span className="italic text-neutral-500">Telefono: </span> +39 3438283932</p>
                    </div>
                </div>
                <div className={`${style.doc_details} flex flex-col xl:flex-row justify-between gap-2`}>
                    <div className="flex-col">
                        <h5>Dettagli</h5>
                        <p className="text-sm text-neutral-500"><span className="italic">Indirizzo: </span> Via da qui, Roma</p>
                        <p className="text-sm"><span className="font-semibold">Specializzazione</span>: Ginecologo</p>
                    </div>
                    <Link className="xl:self-end" to="/doctor/id"><button className={style.details_button}>Scheda dottore</button></Link>
                </div>
            </div>
        </div>
    )
}
export default DoctorCard;