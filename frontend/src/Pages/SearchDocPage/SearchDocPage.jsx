import Searchbar from "../../Components/Searchbar";
import { useContext, useEffect } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import { useLocation } from 'react-router-dom';
import style from './SearchDocPage.module.css';

function SearchDocPage() {
    const { doctors, setSearch } = useContext(GlobalContext)
    const location = useLocation();

    useEffect(() => {
        // Resetta il valore della searchbar quando cambia la pagina
        setSearch('');
    }, [location]);


    return (
        <section className="container bgsecondary px-9 pb-9  custom-search-section flex flex-wrap">
            <div className="py-9 w-full flex justify-between items-center">
                <div className="text-xl">Ricerca il tuo prossimo dottore!</div>
                <Searchbar />
            </div>
            <div className="container">
                <div className="row">
                    {doctors ? doctors.map((doc, i) => {
                        return <div key={i} className="col-12 sm:col-6 lg:p-0">
                            <DoctorCard item={doc} />
                        </div>
                    }) : <div>nessun dottore trovato</div>}
                </div>
            </div>
        </section>
    )
}

export default SearchDocPage;   