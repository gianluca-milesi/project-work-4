const nodemailer = require("nodemailer");
 
const transporter = nodemailer.createTransport({
  service: "gmail", // Puoi usare altri servizi come Outlook, Yahoo, ecc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: "your-email@gmail.com",
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };