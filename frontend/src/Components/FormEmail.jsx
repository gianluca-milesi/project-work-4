import React, { useState } from "react";
import axios from "axios";

function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Invia SOLO l'email di cortesia all'utente
      await axios.post("http://localhost:3000/api/doctors/send-courtesy-email", {
        to: email,
        subject: "Conferma di contatto",
        text: "Grazie per aver compilato il form. Il tuo messaggio è stato ricevuto correttamente.",
      });

      // Svuota i campi dopo l'invio
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      alert("Email di conferma inviata con successo!");
    } catch (error) {
      alert("Errore nell'invio dell'email di conferma");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Telefono:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Messaggio:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button className="custom-button" type="submit">Invia</button>
    </form>
  );
}

export default EmailForm;
