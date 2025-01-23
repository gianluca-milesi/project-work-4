

function ButtonHeroSearch() {
  return (
    <div className="button-hero-container">
      <button className="ease-in-out hover:scale-125 duration-300">
        <img
          className="w-32 p-4 custom-search-hero"
          src="searchHeroBtn.png"
          alt="cerca"
        />
      </button>
      <p className="text-center mt-5 search-text">Ricerca</p>
    </div>
  );
}

export default ButtonHeroSearch;
