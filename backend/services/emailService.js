const nodemailer = require("nodemailer");

// Configura il trasportatore per Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",  // Usa il servizio di Gmail
  auth: {
    user: process.env.EMAIL_USER,  // Il tuo indirizzo Gmail
    pass: process.env.EMAIL_PASS,  // La tua App Password di Google
  },
});

// Funzione per inviare l'email
const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,  // L'email del mittente (quella che invia)
      to: to,                       // Destinatario
      subject: subject,             // Oggetto dell'email
      text: text,                   // Corpo dell'email
    });

    console.log("Email inviata con successo!");
  } catch (error) {
    console.error("Errore nell'invio dell'email: ", error);
  }
};

module.exports = { sendEmail };