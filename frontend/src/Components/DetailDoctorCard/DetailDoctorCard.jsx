import style from "./DetailDoctorCard.module.css"
import randomImg from "/DottoreQuindici.jpg"
//Icons
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LiaMapMarkedAltSolid } from "react-icons/lia";


function DetailDoctorCard({ item = {} }) {
    //per il momento controllo rapido per far caricare i dati e far funzionare tutto
    if (!item) { return <p>Caricamento...</p> }

    const { nome, cognome, immagine, biografia, specializzazione, email, telefono, indirizzo } = item

    return (
        <div className={style.card}>
            <figure className={style.doc_figures}>
                <img className={style.doc_image} src={immagine} />
            </figure>

            <div className={style.card_body}>
                <div className={style.doc_bio}>
                    <div className="doc_description flex-col">
                        <h3 className="text-lg font-semibold">{nome} {cognome}</h3>
                        <p className="text-sm text-neutral-500 italic">{biografia}</p>
                    </div>
                    <div className={`${style.doc_specialization} text-sm`}>
                        <p className="font-semibold lg:font-normal"><span className="hidden lg:inline font-semibold">Specializzazione</span><span className="hidden lg:inline">: </span>{specializzazione}</p>
                    </div>
                </div >
                <div className={style.doc_contacts}>
                    <h5>Contatti</h5>
                    <div className="sm:flex gap-3">
                        <p className="text-sm flex items-center gap-0.5"><HiOutlineMail /><span className="italic text-neutral-500"> Email: </span>{email}</p>
                        <p className="text-sm flex items-center gap-0.5"><FiPhone /><span className="italic text-neutral-500"> Telefono: </span>+39 {telefono}</p>
                    </div>
                </div>
                <div className={style.doc_details}>
                    <h5>Indirizzo</h5>
                    <p className="text-sm flex items-center gap-0.5"><LiaMapMarkedAltSolid /><span className="italic text-neutral-500">{indirizzo}</span></p>
                </div>
            </div >
        </div >
    )
}

export default DetailDoctorCard