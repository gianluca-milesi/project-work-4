import { FaSearch } from "react-icons/fa";

function ButtonHeroSearch() {
  return (
    <div className="button-hero-container">
      <button className="ease-in-out hover:scale-125 duration-300 custom-search-hero">
        <FaSearch className=" w-20 h-20" />
      </button>
      <p className="text-center mt-5 search-text">Ricerca</p>
    </div>
  );
}

export default ButtonHeroSearch;
