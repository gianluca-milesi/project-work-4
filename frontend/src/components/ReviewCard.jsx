import StarsRating from "./StarsRating";
import { CgProfile } from "react-icons/cg";

function ReviewCard({ review = {} }) {
  const { nome, testo, voto, id, data_inserimento } = review;

  const isoDate = new Date(data_inserimento);
  const formattedLocalDate = isoDate.toLocaleString("it-IT").replace(",", "");

  return (
    <div className="m-2 text-white custom-review-card shadow-xl">
      <div className="bg-[rgb(244,247,244)] custom-review-card">
        <div className="p-4">
          <h5 className="text-2xl font-semibold tracking-tight text-black flex gap-3 items-center">
            <CgProfile className="text-black" /> {nome}
          </h5>
          <StarsRating item={{ voto }} />
          <p className="font-medium text-black mt-2 break-words">"{testo}"</p>
        </div>
        <div className="p-4 custom-review-date border-t bg-[rgb(143,211,201)] flex justify-between items-center">
          <span className="text-sm text-gray-800">{formattedLocalDate}</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
