
import DoctorCard from "../components/DoctorCard/DoctorCard.jsx"

function HomePage() {
    return (
        <div className="container">
            <div className="row">
                <div className="sm:col-12 md:col-6"><DoctorCard /></div>
                <div className="sm:col-12 md:col-6"><DoctorCard /></div>
            </div>
        </div>
    )
}

export default HomePage;