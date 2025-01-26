import axios from "axios"
//Hooks
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
//Components
import DetailDoctorCard from "../components/DetailDoctorCard/DetailDoctorCard.jsx"
import { AddReviewFinalForm } from '../Components/AddReviewForm';


function DocDetailsPage() {

    const [doctor, setDoctor] = useState(null)
    const { id } = useParams()

    function fetchDoctor() {
        axios.get(`http://localhost:3000/api/doctors/${id}`)
            .then(res => {
                setDoctor(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchDoctor()
    }, [id])


    return (
        <>
            <section className="doc_detail">
                <div className="container">
                    <DetailDoctorCard item={doctor} />
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