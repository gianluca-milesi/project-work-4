import { useState } from "react";
import { Link } from "react-router-dom";

import style from "./ContactPage.module.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log(formData);
  };
  return (
    <div
      className={style.submit}
    >
      {/* Contact Form Section */}
      <section className="py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-semibold text-center text-white">
            Contattaci
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bgsecondary p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-medium text-gray-800">
                Completa il form per segnalarci un problema
              </h3>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700">
                    Nominativo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700">
                    Testo
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`custom-button hover:bg-blue-900 w-full text-white py-3 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600`}
                >
                  {formSubmitted ? "Form inviato" : "Invia form"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bgsecondary p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-medium text-gray-800">
                Informazioni di contatto
              </h3>
              <ul className="mt-6 space-y-4 text-gray-600">
                <li>
                  <Link to="">
                    <strong className="font-medium">Telefono:</strong> (+39)
                    123456789
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://workspace.google.com/intl/it/gmail/"
                    target="-blank"
                  >
                    <strong className="font-medium">Email:</strong>{" "}
                    info@bdoctors.com
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <strong className="font-medium">
                      Servizio Clienti Telefono:
                    </strong>{" "}
                    (+39) 234567890
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://workspace.google.com/intl/it/gmail/"
                    target="-blank"
                  >
                    <strong className="font-medium">
                      Servizio Clienti Email:
                    </strong>{" "}
                    clienti@bdoctors.com
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <strong className="font-medium">
                      Supporto Tecnico Telefono:
                    </strong>{" "}
                    (+39) 876543210
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://workspace.google.com/intl/it/gmail/"
                    target="-blank"
                  >
                    <strong className="font-medium">
                      Supporto Tecnico Email:
                    </strong>{" "}
                    tecnico@bdoctors.com
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <strong className="font-medium">
                      Marketing e Comunicazione Telefono:
                    </strong>{" "}
                    (+39) 567890123
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://workspace.google.com/intl/it/gmail/"
                    target="-blank"
                  >
                    <strong className="font-medium">
                      Marketing e Comunicazione Email:
                    </strong>{" "}
                    marketing@bdoctors.com
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <strong className="font-medium">
                      Assistenza Internazionale Telefono:
                    </strong>{" "}
                    (+39) 890123456
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://workspace.google.com/intl/it/gmail/"
                    target="-blank"
                  >
                    <strong className="font-medium">
                      Assistenza Internazionale Email:
                    </strong>{" "}
                    international@bdoctors.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
