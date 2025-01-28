//Contexts
import GlobalContext from "../contexts/GlobalContext";
//Hooks
import { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
//Components
import DetailDoctorCard from "../components/DetailDoctorCard/DetailDoctorCard.jsx";
import ReviewCard from "../components/ReviewCard";
import StarsRating from "../components/StarsRating.jsx";
import { AddReviewFinalForm } from "../Components/AddReviewForm";

function DocDetailsPage() {
  const { id: doctorId } = useParams();
  const { doctorData, setDoctorData } = useContext(GlobalContext);

  //Navigate
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  useEffect(() => {
    fetch(`http://localhost:3000/api/doctors/${doctorId}`)
      .then((response) => response.json())
      .then((data) => setDoctorData(data))
      .catch((error) => console.error("Errore nella chiamata API:", error));
  }, [doctorId]);

  if (!doctorData) return <p>Caricamento...</p>;

  return (
    <>
      {/* CARDS */}
      <div className="bgprimary">
        <div className="container rounded-lg bgsecondary py-3">
          <section className="doc_detail m-5">
            <button
              onClick={goBack}
              className="back_button mb-5 bg-[#00c3a5] text-white rounded font-semibold py-1 px-2"
            >
              Indietro
            </button>
            <DetailDoctorCard item={doctorData} />
          </section>

          {/* REVIEW */}
          {/* Aggiungere container, row, cols */}
          <section>
            <div className="container">
              <div className="bg-white rounded-xl p-3 my-3 flex gap-1 justify-center w-fit items-center">
                <span>Voto Medio: </span>
                <StarsRating item={doctorData} />
              </div>
              <div className="row">
                {doctorData.recensioni && doctorData.recensioni.length > 0 ? (
                  doctorData.recensioni.map((review) => (
                    <div key={review.id} className="col-6">
                      <ReviewCard review={review} />
                    </div>
                  ))
                ) : (
                  <p>Nessuna recensione disponibile.</p>
                )}
              </div>
            </div>
          </section>

          <section className="form_review">
            <AddReviewFinalForm />
          </section>
        </div>
      </div>
    </>
  );
}

export default DocDetailsPage;
