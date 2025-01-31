//Contexts
import GlobalContext from "../../contexts/GlobalContext";
//Hooks
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//Components
import Searchbar from "../../components/Searchbar";
import DoctorCard from "../../components/DoctorCard/DoctorCard.jsx";


function SearchDocPage() {
  const { doctors, setSearch, search, } = useContext(GlobalContext);
  const location = useLocation();
  const navigate = useNavigate();

  function goBack() {
    navigate('/');
    setSearch("")
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const queryParams = new URLSearchParams(location.search);
      queryParams.set("search", search);
      navigate(`${location.pathname}?${queryParams.toString()}`);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search, location.pathname, navigate]);

  return (
    <div className="bgprimary">
      <section className="container bgsecondary px-9 pb-9  custom-search-section flex flex-wrap">
        <div className="py-9 w-full flex justify-between items-center">
          <button
            onClick={goBack}
            className="back_button custom-button font-semibold py-1 px-2"
          >
            Indietro
          </button>
          <Searchbar />
        </div>
        <div className="container">
          <div className="row">
            {doctors.length > 0 ? (
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
