import style from "./DetailDoctorCard.module.css"
import placeholderImg from "/DottoreQuindici.jpg"
//Hooks
import { Link } from "react-router-dom";
//Icons
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { TbMapSearch } from "react-icons/tb";


function DetailDoctorCard({ item = {} }) {
    //per il momento controllo rapido per far caricare i dati e far funzionare tutto
    if (!item) { return <p>Caricamento...</p> }

    const { nome, cognome, immagine, biografia, specializzazione, email, telefono, indirizzo } = item

    return (
        <div className={`${style.card} sm:flex justify-center`}>
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
                        <div className="text-sm flex items-center gap-0.5">
                            <HiOutlineMail />
                            <p><span className="italic text-neutral-500">Email: </span><Link to="https://workspace.google.com/intl/it/gmail/" target="_blank" className="hover:text-neutral-500">{email}</Link></p>
                        </div>
                        <div className="text-sm flex items-center gap-0.5">
                            <FiPhone />
                            <p><span className="italic text-neutral-500">Telefono: </span><Link to="https://image.spreadshirtmedia.com/image-server/v1/compositions/T1367A2PA2791PT32X47Y12D1050561323W15629H25000/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/john-pork-is-calling-shirt-john-pork-meme-wo-cotton-drawstring-bag.jpg" target="_blank" className="hover:text-neutral-500">{telefono}</Link></p>
                        </div>
                    </div>
                </div>
                <div className={style.doc_details}>
                    <h5>Indirizzo</h5>
                    <div className="text-sm flex items-center gap-0.5">
                        <TbMapSearch />
                        <p className="italic text-neutral-500">
                            <Link
                                to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(indirizzo)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="italic text-neutral-500 hover:text-blue-800"
                            >
                                {indirizzo}
                            </Link>
                        </p>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default DetailDoctorCard