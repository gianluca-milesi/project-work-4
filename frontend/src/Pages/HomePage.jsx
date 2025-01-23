import axios from "axios"
import { useState, useEffect } from "react";
import Hero from "../layouts/Hero";
import DoctorCard from "../components/DoctorCard/DoctorCard";
import Banner from "../components/Banner/Banner"

function HomePage() {

    const [doctors, setDoctors] = useState([])

    function fetchDoctors() {
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
    }

    useEffect(() => {
        fetchDoctors()
    }, [])


    return (
        <div>
            <section className="hero">
                <Hero />
            </section>

            <section className="card_section">
                <div className="container">
                    <h2 className="text-2xl">I nostri migliori medici</h2>
                    <div className="row">
                        {doctors.map(doc => (
                            <div key={doc.id} className="col-12 sm:col-6">
                                <DoctorCard item={doc} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="banner">
                <div className="container">
                    <Banner />
                </div>
            </section>
        </div>
    )
}

export default HomePage;