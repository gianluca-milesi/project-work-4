import Hero from "../layouts/Hero";
import DoctorCard from "../components/DoctorCard/DoctorCard";
import Banner from "../components/Banner/Banner"

function HomePage() {
    return (
        <div>
            <section className="hero">
                <Hero />
            </section>

            <section className="card_section">
                <div className="container">
                    <h2 className="text-2xl">I nostri migliori medici</h2>
                    <div className="row">
                        <div className="col-6">
                            <DoctorCard />
                        </div>
                        <div className="col-6">
                            <DoctorCard />
                        </div>
                        <div className="col-6">
                            <DoctorCard />
                        </div>
                        <div className="col-6">
                            <DoctorCard />
                        </div>
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