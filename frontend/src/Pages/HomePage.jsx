import axios from "axios"
//Contexts
import GlobalContext from "../contexts/GlobalContext";
//Hooks
import { useState, useEffect } from "react";
import { useContext } from "react";
//Components
import Hero from "../layouts/Hero";
import DoctorCard from "../components/DoctorCard/DoctorCard";
import Banner from "../components/Banner/Banner"


function HomePage() {

  const [doctors, setDoctors] = useState([])
  const { setIsLoading } = useContext(GlobalContext)

  function fetchDoctors() {

    setIsLoading(true)

    axios.get(`http://localhost:3000/api/doctors`)
      .then(res => {
        // setDoctors(res.data)
        const topDoctors = res.data
          .sort((a, b) => b.avgVote - a.avgVote) //ordina in maniera decrescente
          .slice(0, 4); // prendo solo i primi 4
        setDoctors(topDoctors);
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchDoctors()
  }, [])


  return (
    <div className="bgsecondary">
      <section className="hero">
        <Hero />
      </section>
      <section className="card_section bgsecondary">
        <div className="container py-10">
          <h2 className="text-4xl pb-3">I nostri migliori medici</h2>
          <div className="row">
            {doctors.map((doc) => (
              <div key={doc.id} className="col-12 sm:col-6 lg:p-0">
                <DoctorCard item={doc} />
              </div>
            ))}
          </div>
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