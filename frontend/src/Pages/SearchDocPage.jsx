import Searchbar from "../Components/Searchbar";
import { useContext, useEffect } from "react";
import GlobalContext from "../contexts/GlobalContext";
import DoctorCard from "../components/DoctorCard/DoctorCard";
import { useLocation } from 'react-router-dom';
function SearchDocPage() {
    const {doctors, setSearch} = useContext(GlobalContext)
    const location = useLocation();

    useEffect(() => {
        // Resetta il valore della searchbar quando cambia la pagina
        setSearch('');
    }, [location]);

    
    return (
        <section className="container flex flex-wrap"> 
        <div className="py-9 w-full flex justify-between items-center">
            <div>Search Doc Page</div>
            <Searchbar />
        </div>
        <div className="flex flex-wrap">
            {doctors?doctors.map((doc, i)=>{
                return <div key={i} className="w-1/4">
                    <DoctorCard item={doc}/>
                </div>
            }):<div>nessun dottore trovato</div>}
        </div>
        </section>   
    )
}

export default SearchDocPage;   