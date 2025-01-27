import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';
import { AddReviewFinalForm } from '../Components/AddReviewForm';

function DocDetailsPage() {
  const { id: doctorId } = useParams();
  const [doctorData, setDoctorData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/doctors/${doctorId}`)
      .then((response) => response.json())
      .then((data) => setDoctorData(data))
      .catch((error) => console.error('Errore nella chiamata API:', error));
  }, [doctorId]);

  if (!doctorData) return <p>Caricamento...</p>;

  return (
    <section>
      <h1 className="text-3xl font-bold">{doctorData.nome} {doctorData.cognome}</h1>
      <p>Specializzazione: {doctorData.specializzazione}</p>
      <p>Voto medio: {doctorData.avgVote}</p>
      <img src={doctorData.immagine} alt={`${doctorData.nome}`} className="my-4 rounded-lg" />
      <h2 className="text-2xl font-bold mt-6">Recensioni:</h2>
      
      {/* REVIEW */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {doctorData.recensioni && doctorData.recensioni.length > 0 ? (
          doctorData.recensioni.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        ) : (
          <p>Nessuna recensione disponibile.</p>
        )}
      </section>
      
      <AddReviewFinalForm />
    </section>
  );
}

export default DocDetailsPage;

