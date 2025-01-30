import GlobalContext from "../contexts/GlobalContext";
//Hooks
import { useEffect, useContext } from "react";
import { useParams, useNavigate} from "react-router-dom";
//Components
import DetailDoctorCard from "../components/DetailDoctorCard/DetailDoctorCard.jsx";
import ReviewCard from "../components/ReviewCard";
import StarsRating from "../components/StarsRating.jsx";
import { AddReviewFinalForm } from "../Components/AddReviewForm";
import EmailForm from "../components/FormEmail"; // Importa il componente EmailForm

function DocDetailsPage() {
  const { id: doctorId } = useParams();
  const { doctorData, setDoctorData, setIsLoading } = useContext(GlobalContext);

  //Navigate
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  useEffect(() => {

    setIsLoading(true)

    fetch(`http://localhost:3000/api/doctors/${doctorId}`)
      .then((response) => response.json())
      .then((data) => setDoctorData(data))
      .catch((error) => console.error("Errore nella chiamata API:", error))
      .finally(() => {
        setIsLoading(false)
      })
  }, [doctorId]);

  if (!doctorData) return <p>Caricamento...</p>;

  return (
    <>
      <div className="background bgprimary">
        <div className="container rounded-lg bgsecondary py-3">
          <section className="doc_detail m-5">
            <button
              onClick={goBack}
              className="back_button mb-5 bg-[#00c3a5] text-white rounded font-semibold py-1 px-2"
            >
              Indietro
            </button>
            {doctorData && <DetailDoctorCard item={doctorData} />}
          </section>

          <section className="reviews">
            <div className="container">
              <div className="bg-white rounded-xl p-3 my-7 mb-3 flex gap-1 justify-center w-fit items-center">
                <span>Voto Medio: </span>
                <StarsRating item={doctorData} />
              </div>
              <div className="row">
                {doctorData.recensioni && doctorData.recensioni.length > 0 ? (
                  doctorData.recensioni.map((review) => (
                    <div key={review.id} className="col-12 md:col-6">
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

          {/* Aggiungi il form EmailForm in basso */}
          <section className="contact_form">
            {doctorData && <EmailForm doctorEmail={doctorData.email} />}
          </section>
        </div>
      </div>
    </>
  );
}

export default DocDetailsPage;
