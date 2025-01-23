import Hero from "../layouts/Hero";
import DoctorCard from "../components/DoctorCard/DoctorCard";
import Banner from "../components/Banner/Banner"
import {FinalAddDoctorForm} from "../Components/AddDoctorForm.jsx"
import { Toast } from "../Components/MsgToast.jsx"
function HomePage() {
    return (
        <div>
            <FinalAddDoctorForm/>
            <Toast/>

            <Hero />
            <DoctorCard />
            <Banner></Banner>
        </div>
    )
}

export default HomePage;