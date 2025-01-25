/* eslint-disable react/prop-types */
import style from "./DoctorCard.module.css"
import { Link } from "react-router-dom"

function DoctorCard({ item = {} }) {

  const { nome, cognome, biografia, specializzazione, immagine, id } = item

  return (
    <Link to={`/doctor/${id}`}>
      <div className={`${style.card} sm:h-full lg:flex lg:items-center lg:h-auto`}>
        <figure className={style.doc_figures}>
          <img className={`${style.doc_image}`} src={immagine} />
        </figure>
        <div className={style.card_body}>
          <div className="doc_description flex-col">
            <h3 className="text-lg font-semibold">{nome} {cognome}</h3>
            <p className="text-sm text-neutral-500 italic">{biografia}</p>
          </div>
          <div className="doc_specialization flex text-sm">
            <p className="font-semibold">{specializzazione}</p>
          </div>

          {/* <div className={style.doc_contacts}>
          <h5>Contatti</h5>
          <div className="xl:flex gap-3">
            <p className="text-sm flex items-center gap-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span className="italic text-neutral-500">Email: </span>
              doc@gmail.com
            </p>
            <p className="text-sm flex items-center gap-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span className="italic text-neutral-500">Telefono: </span> +39
              3438283932
            </p>
          </div>
        </div> */}

          {/* <Link className="xl:self-end" to="/doctor/id">
            <button className={style.details_button}>Scheda dottore</button>
          </Link> */}

        </div>
      </div>
    </Link>
  );
}
export default DoctorCard;
