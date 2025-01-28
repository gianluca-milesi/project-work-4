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
        <div className="bg-gray-50 text-gray-900">
            {/* Contact Form Section */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-semibold text-center text-gray-900">Contattaci</h2>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-medium text-gray-800">Completa il form per segnalarci un problema</h3>
                            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700">Nominativo</label>
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
                                    <label htmlFor="email" className="block text-gray-700">Email</label>
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
                                    <label htmlFor="message" className="block text-gray-700">Testo</label>
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

                                <button type="submit" className={`${style.submit} w-full text-white py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}>
                                    {formSubmitted ? 'Message Sent' : 'Send Message'}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-medium text-gray-800">Informazioni di contatto</h3>
                            <p className="mt-4 text-gray-600">Contattaci anche tramite email e telefono:</p>
                            <ul className="mt-6 space-y-4 text-gray-600">
                                <li>
                                    <Link to=""><strong className="font-medium">Telefono:</strong> (+39) 123456789</Link>
                                </li>
                                <li>
                                    <Link to="https://workspace.google.com/intl/it/gmail/" target="-blank"><strong className="font-medium">Email:</strong> info@bdoctors.com</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage;