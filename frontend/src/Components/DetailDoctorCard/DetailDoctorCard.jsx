import style from "./DetailDoctorCard.module.css"
//Hooks
import { Link, useLocation } from "react-router-dom";
//Icons
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { TbMapSearch } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";


function DetailDoctorCard({ item = {} }) {

    const { nome, cognome, immagine, biografia, specializzazione, email, telefono, indirizzo } = item
    const location = useLocation()


    return (
        <div className="card sm:flex justify-center">
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
                        <p className="font-semibold lg:font-normal text-base"><span className="hidden lg:inline font-semibold">Specializzazione</span><span className="hidden lg:inline">: </span>{specializzazione}</p>
                    </div>
                </div >
                <div className={style.doc_contacts}>
                    <h5>Contatti</h5>
                    <div className="sm:flex gap-3">
                        <div className="text-sm flex items-center gap-0.5">
                            <HiOutlineMail />
                            <p><span className="italic text-neutral-500">Email: </span><Link to="https://workspace.google.com/intl/it/gmail/" target="_blank" className="hover:text-blue-500 underline" title="Scrivi una e-mail">{email}</Link></p>
                        </div>
                        <div className="text-sm flex items-center gap-0.5">
                            <FiPhone />
                            <p><span className="italic text-neutral-500">Telefono: </span><Link to="https://play-lh.googleusercontent.com/N8k1v59v30l3G4d7tEBRQZqHIMpUVyDyFzb0B4sxOwJqCBL-OsWYCT1dJaZhzNvrnr4=w240-h480-rw" target="_blank">{telefono}</Link></p>
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
                                className="italic text-neutral-500 hover:text-blue-500"
                                title="Cerca su Google Maps"
                            >
                                {indirizzo}
                            </Link>
                        </p>
                        {location.pathname !== `/doctor/${item.id}/email` &&
                            <Link to={`/doctor/${item.id}/email`}>
                                <button className={`${style.contact_button} custom-button hover:bg-blue-900 p-3 flex items-center justify-center gap-3`}>
                                    <MdOutlineEmail className="text-xl sm:text-2xl" />
                                    <span>Contatta ora!</span>
                                </button>
                            </Link>
                        }
                    </div>
                </div>
            </div >
        </div >
    )
}

export default DetailDoctorCard