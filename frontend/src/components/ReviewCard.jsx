import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

function ReviewCard({ review = {} }) {


    const { nome, testo, voto, id, data_inserimento } = review;

    const isoDate = new Date(data_inserimento);
    const formattedLocalDate = isoDate.toLocaleString("it-IT").replace(",", "");


    return (
        <div className="m-2 text-white rounded-lg shadow-xl hover:shadow-2xl">
            <div className="p-6 bg-[rgb(244,247,244)] ">
                <h5 className="text-2xl font-semibold tracking-tight text-black flex gap-3 items-center">
                    <CgProfile className="text-black" /> {nome}
                </h5>
                <div className="flex items-center gap-1 text-yellow-400 mt-2">
                    {[...Array(voto)].map((_, index) => (
                        <span key={index} className="text-lg">★</span>
                    ))}
                    {voto % 1 !== 0 && <span className="text-lg">☆</span>}
                </div>
                <p className="font-medium text-black mt-2 break-words">"{testo}"</p>
            </div>
            <div className="p-4 border-t bg-[rgb(143,211,201)] flex justify-between items-center">
                <span className="text-sm text-gray-800">{formattedLocalDate}</span>
            </div>
        </div>
    );
}

export default ReviewCard;