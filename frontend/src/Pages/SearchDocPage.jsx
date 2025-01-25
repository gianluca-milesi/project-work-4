import Searchbar from "../Components/Searchbar";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import DoctorCard from "../components/DoctorCard/DoctorCard";

function SearchDocPage() {
    const {doctors} = useContext(GlobalContext)
    return (
        <section> 
            <div>Search Doc Page</div>
            <Searchbar />
            {doctors?doctors.map((doc, i)=>{
                return <div key={i}>
                    <DoctorCard item={doc}/>
                </div>
            }):<div>nessun dottore trovato</div>}
        </section>   
    )
}

export default SearchDocPage;   