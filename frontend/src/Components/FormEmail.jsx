import React, { useState } from "react";
import axios from "axios";

function EmailForm({ doctorEmail }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  console.log(doctorEmail);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Invia l'email al professionista
      await axios.post("http://localhost:3000/api/doctors/send-email", {
        to: doctorEmail, // Email del dottore passato come prop
        subject: "Nuovo interessato",
        text: `Nome: ${name}\nEmail: ${email}\nTelefono: ${phone}\nMessaggio: ${message}`,
      });

      // Invia l'email di cortesia all'utente
      await axios.post("http://localhost:3000/api/doctors/send-courtesy-email", {
        to: email,
        subject: "Conferma di contatto",
        text: "Grazie per aver contattato il medico. Il medico è stato avvisato e ti contatterà a breve.",
      });

      alert("Email inviata con successo");
    } catch (error) {
      alert("Errore nell'invio dell'email");
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
      <button className="custom-button" type="submit">Invia Email</button>
    </form>
  );
}

export default EmailForm;
