import Hero from "../layouts/Hero";
import DoctorCard from "../components/DoctorCard/DoctorCard";
import Banner from "../components/Banner/Banner"

function HomePage() {
    return (
        <div>

            <Hero />
            <DoctorCard />
            <Banner></Banner>
        </div>
    )
}

export default HomePage;