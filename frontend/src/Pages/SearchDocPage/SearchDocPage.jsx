//Contexts
import GlobalContext from "../../contexts/GlobalContext";
//Hooks
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//Components
import Searchbar from "../../components/Searchbar";
import DoctorCard from "../../components/DoctorCard/DoctorCard";


function SearchDocPage() {
  const { doctors, setSearch } = useContext(GlobalContext);
  const location = useLocation();

  //Navigate
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  useEffect(() => {
    setSearch(""); // Resetta il valore della searchbar quando cambia la pagina
  }, [location]);


  return (
    <div className="bgprimary">
      <section className="container bgsecondary px-9 pb-9  custom-search-section flex flex-wrap">
        <div className="py-9 w-full flex justify-between items-center">
          <button
            onClick={goBack}
            className="back_button bg-[#00c3a5] text-white rounded font-semibold py-1 px-2"
          >
            Indietro
          </button>
          <Searchbar />
        </div>
        <div className="container">
          <div className="row">
            {doctors ? (
              doctors.map((doc, i) => {
                return (
                  <div key={i} className="col-12 sm:col-6 lg:p-0">
                    <DoctorCard item={doc} />
                  </div>
                );
              })
            ) : (
              <div>nessun dottore trovato</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchDocPage;
