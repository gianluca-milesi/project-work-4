import Hero from "../layouts/Hero";

import Banner from "../components/Banner/Banner"
import {FinalAddDoctorForm} from "../Components/AddDoctorForm.jsx"
import { Toast } from "../Components/MsgToast.jsx"
function HomePage() {
    return (
        <div>
            <FinalAddDoctorForm/>
            <Toast/>
            <Hero />
        
            <Banner></Banner>
        </div>
    )
}

export default HomePage;