//Components
import DetailDoctorCard from "../components/DetailDoctorCard/DetailDoctorCard.jsx"
import { AddReviewFinalForm } from '../Components/AddReviewForm';

function DocDetailsPage() {
    return (
        <>
            <section className="detail_doc_card">
                <div className="container">
                    <DetailDoctorCard />
                </div>
            </section>

            <hr />

            <section>
                <AddReviewFinalForm />
            </section>

        </>
    )
}

export default DocDetailsPage;