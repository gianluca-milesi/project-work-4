const nodemailer = require("nodemailer");

// Configura il trasportatore per Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",  // Usa il servizio di Gmail
  auth: {
    user: process.env.EMAIL_USER,  // Il tuo indirizzo Gmail
    pass: process.env.EMAIL_PASS,  // La tua App Password di Google
  },
  tls: {
    rejectUnauthorized: false, // Disabilita la verifica dei certificati non validi
  },
});

// Funzione per inviare l'email
const sendEmail = async (to) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,  // L'email del mittente (quella che invia)
      to: to,                       // Destinatario
      subject: "Conferma di contatto",             // Oggetto dell'email
      text: "Grazie per aver compilato il form. Il tuo messaggio è stato ricevuto correttamente.",                   // Corpo dell'email
    });
  } catch (error) {
    console.error("Errore nell'invio dell'email: ", error);
  }
};

const sendEmailDoc = async (to, subject, text, doctorEmail, name) => {
  try {
    await transporter.sendMail({
      from: `${name} <${to}>`,  // L'email del mittente (quella che invia)
      replyTo: to,
      to: doctorEmail,                       // Destinatario
      subject: subject,             // Oggetto dell'email
      text: text,                   // Corpo dell'email
    });

    console.log("Email inviata con successo!");
  } catch (error) {
    console.error("Errore nell'invio dell'email: ", error);
  }
};

module.exports = { sendEmail, sendEmailDoc };