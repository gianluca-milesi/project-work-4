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
        <div className="container rounded-3xl bgsecondary py-3">
          <section className="doc_detail m-5">
            <button
              onClick={goBack}
              className="custom-button !font-normal mb-5"
            >
              Indietro
            </button>
            {doctorData && <DetailDoctorCard item={doctorData} />}
          </section>

          <hr className="border-gray-400 mb-5" />

          <section className="reviews">
            <div className="container">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-center">RECENSIONI</h1>
                <div className="flex">
                  <div className="bg-white rounded-lg px-3 py-1 flex gap-1 justify-center items-center text-center shadow-xl">
                    <span>Voto Medio: </span>
                    <StarsRating item={doctorData} />
                  </div>
                </div>
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

          <section className="form_review mt-5">
            <AddReviewFinalForm />
          </section>
        </div>
      </div>
    </>
  );
}

export default DocDetailsPage;
