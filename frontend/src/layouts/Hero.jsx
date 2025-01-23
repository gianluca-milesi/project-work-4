import ButtonHeroSearch from "../components/SearchButtonHero";
import { Link } from "react-router-dom";

function hero() {
  return (
    <div className="hero-container p-4 mb-8">
      <div className=" m-8 hero relative p-8 pb-0">
        <div>
          <h1 className="text-3xl hero__title">
            Trova lo specialista che fa per te!
          </h1>
          <p className="hero__subtitle">
            Cerca tra più di 200 specialisti e medici di medicina generale in
            tutta Italia
          </p>
        </div>
        <div className="flex justify-between layout-mediaQ items-center">
          <img
            className="w-56 hide-on-mobile"
            src="http://localhost:3000/Stockimg/computerDoctor.png"
            alt="cpuDoc"
          />
          <Link to="/search">
            <ButtonHeroSearch />
          </Link>

          <div className="opacity-0 hide-on-mobile">
            <img
              className="w-56"
              src="http://localhost:3000/Stockimg/cellDoctor.png"
              alt="cellular doctor"
            />
          </div>

          <div className="absolute right-0 top-1">
            <img
              className="w-80 hide-on-mobile"
              src="http://localhost:3000/Stockimg/cellDoctor.png"
              alt="cellular doctor"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
