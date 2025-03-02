import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function Searchbar() {

  const { search, setSearch } = useContext(GlobalContext)


  return (
    <div className="shadow-md rounded-lg">
      <input
        onChange={(e) => { setSearch(e.target.value) }}
        className="h-8 rounded-md border-3  p-3"
        type="text"
        value={search}
        placeholder='Cerca' />
    </div>
  )
}

export default Searchbar;
