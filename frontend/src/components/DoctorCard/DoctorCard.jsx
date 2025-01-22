import style from "./DoctorCard.module.css"

function DoctorCard() {
    return (
        <div className={style.card}>
            <figure>
                <img src="..." />
            </figure>
            <div className={style.card_body}>
                <h3 className="text-lg font-semibold">Nome Cognome</h3>
                <div className={style.doc_contacts}>
                    <h5>Contatti</h5>
                    <p className="text-sm"><span className="italic">Email: </span>doc@gmail.com</p>
                    <p className="text-sm"><span className="italic">Telefono: </span> 3438283932</p>
                </div>
                <div className={style.doc_details}>
                    <h5>Dettagli</h5>
                    <p className="text-sm"><span className="italic">Indirizzo: </span> Via da qui</p>
                    <p className="text-sm"><span className="font-semibold">Specializzazione</span>: Ginecologo</p>
                </div>
            </div>
        </div>
    )
}
export default DoctorCard;