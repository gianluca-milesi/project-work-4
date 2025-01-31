import axios from "axios";
// Contexts
import GlobalContext from "../contexts/GlobalContext";
// Hooks
import { useState, useEffect, useContext } from "react";
// Components
import Hero from "../layouts/Hero";
import DoctorCard from "../components/DoctorCard/DoctorCard";
import Banner from "../components/Banner/Banner";
// Carousel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomePage() {
  const [doctors, setDoctors] = useState([]);
  const { setIsLoading } = useContext(GlobalContext);

  // Funzione per recuperare i medici
  function fetchDoctors() {
    setIsLoading(true);
    axios.get(`http://localhost:3000/api/doctors`)
      .then(res => {
        const topDoctors = res.data
          .sort((a, b) => b.avgVote - a.avgVote) // Ordina in maniera decrescente
          .slice(0, 9); // Prende solo i primi 4
        setDoctors(topDoctors);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchDoctors();
  }, []);

  // Impostazioni per il carosello
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bgsecondary">
      <section className="hero">
        <Hero />
      </section>

      <section className="card_section bgsecondary">
        <div className="container py-10">
          <h2 className="text-4xl pb-3">I nostri migliori medici</h2>
          <Slider {...settings}>
            {doctors.map((doc) => (
              <div key={doc.id} className="px-2">
                <DoctorCard item={doc} />
              </div>
            ))}
          </Slider >
        </div>
      </section>

      <section className="banner">
        <div>
          <Banner />
        </div>
      </section>
    </div>
  );
}

export default HomePage;