/* eslint-disable react/prop-types */
import style from "./DoctorCard.module.css"
import { Link } from "react-router-dom"

function DoctorCard({ item = {} }) {

  const { nome, cognome, biografia, specializzazione, immagine, id, avgVote } = item

  const avgVoteInt = Math.round(avgVote)

  return (
    <Link to={`/doctor/${id}`}>
      <div className={`${style.card} sm:h-full lg:flex lg:items-center lg:h-auto`}>
        <figure className={style.doc_figures}>
          <img className={style.doc_image} src={immagine} />
        </figure>
        <div className={style.card_body}>
          <div className="doc_description flex-col">
            <h3 className="text-lg font-semibold">{nome} {cognome}</h3>
            <p className="text-sm text-neutral-500 italic">{biografia}</p>
          </div>
          <div className="wrapper flex items-center justify-between">
            <div className="doc_specialization flex text-sm">
              <p className="font-semibold">{specializzazione}</p>
            </div>
            <div className="flex items-center gap-0.5 text-yellow-400">
              {[...Array(avgVoteInt)].map((_, index) => (
                <span key={index} className="text-lg">★</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default DoctorCard;
