import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function Searchbar(){
    const {search, setSearch} = useContext(GlobalContext)

    return(
      <div>
         <input 
         onChange={(e)=>{setSearch(e.target.value)}} 
         className="h-8 bg-slate-500 rounded-md border-2 border-slate-950" 
         type="text" 
         value={search}
         placeholder='Cerca'/>
      </div>
    )
        
}

export default Searchbar;