import GlobalContext from "../contexts/GlobalContext";
//Hooks
import { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
//Components
import DetailDoctorCard from "../components/DetailDoctorCard/DetailDoctorCard.jsx";
import { FinalEmailForm } from "../components/FormEmail";

function DocEmail() {
  const { id: doctorId } = useParams();
  const { doctorData, setDoctorData, setIsLoading } = useContext(GlobalContext);

  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  useEffect(() => {
    setIsLoading(true);

    fetch(`http://localhost:3000/api/doctors/${doctorId}`)
      .then((response) => response.json())
      .then((data) => setDoctorData(data))
      .catch((error) => console.error("Errore nella chiamata API:", error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [doctorId]);

  if (!doctorData) return <p>Caricamento...</p>;

  return (
    <>
      <div className="background bgprimary">
        <div className="container rounded-3xl bgsecondary py-3">
          <section className="doc_detail m-5">
            <button
              onClick={goBack}
              className="custom-button mb-5"
            >
              Indietro
            </button>
            {doctorData && <DetailDoctorCard item={doctorData} />}
          </section>
          <div className="container">
            <FinalEmailForm doctorEmail={doctorData.email} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DocEmail;
