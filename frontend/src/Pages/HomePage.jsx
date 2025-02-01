import axios from "axios";
// Contexts
import GlobalContext from "../contexts/GlobalContext";
// Hooks
import { useState, useEffect, useContext } from "react";
// Components
import NewHero from "../layouts/NewHero/NewHero.jsx";
import Banner from "../components/Banner/Banner";
import DoctorCardCarousel from "../components/DoctorCardCarousel/DoctorCardCarousel";
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
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    draggable: false,
    swipe: true,
    pauseOnHover: false,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipe: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
        },
      },
    ],
  };



  return (
    <>
      <section className="hero">
        <NewHero />
      </section>

      <section className="card_section my-10">
        <div className="container">
          <h2 className="text-4xl pb-3">I nostri migliori medici</h2>
          <Slider {...settings}>
            {doctors.map((doc) => (
              <DoctorCardCarousel key={doc.id} item={doc} />
            ))}
          </Slider >
        </div>
      </section>

      <section className="banner">
        <div>
          <Banner />
        </div>
      </section>
    </>
  );
}

export default HomePage;