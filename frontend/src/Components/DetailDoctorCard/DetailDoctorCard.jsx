import style from "./DetailDoctorCard.module.css"
import randomImg from "/DottoreQuindici.jpg"
//Icons
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";


function DetailDoctorCard() {
    return (
        <div className={style.card}>
            <figure className={style.doc_figures}>
                <img className={style.doc_image} src={randomImg} />
            </figure>

            <div className={style.card_body}>
                <div className={style.doc_bio}>
                    <div className="doc_description flex-col">
                        <h3 className="text-lg font-semibold">Nome Cognome</h3>
                        <p className="text-sm text-neutral-500 italic">Biografia Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, libero.</p>
                    </div>
                    <div className={`${style.doc_specialization} text-sm`}>
                        <p className="font-semibold lg:font-normal"><span className="hidden lg:inline font-semibold">Specializzazione</span><span className="hidden lg:inline">: </span>Urologo</p>
                    </div>
                </div >
                <div className={style.doc_contacts}>
                    <h5>Contatti</h5>
                    <div className="sm:flex gap-3">
                        <p className="text-sm flex items-center gap-0.5"><HiOutlineMail /><span className="italic text-neutral-500"> Email: </span>doc@gmail.com</p>
                        <p className="text-sm flex items-center gap-0.5"><FiPhone /><span className="italic text-neutral-500"> Telefono: </span>+39 3438283932</p>
                    </div>
                </div>
                <div className={style.doc_details}>
                    <h5>Indirizzo</h5>
                    <p className="text-sm italic text-neutral-500">Indirizzo: Via da qui, Roma</p>
                </div>
            </div >
        </div >
    )
}

export default DetailDoctorCard