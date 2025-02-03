/* eslint-disable react/prop-types */
import { WithHandlerForm } from "./Hoc/WithHandlerForm";
import { WithRegistrationForm } from "./Hoc/WithRegistration";
import { WithValidation } from "./Hoc/WithValidation";

const baseForm = {
  name: "",
  email: "",
  message: "",
  subject: "",
};

function EmailForm({ data, handlerInput, emailSender, doctorEmail }) {
  const { name, email, message, subject } = data;

  return (
    <form
      className="sm:flex mt-16 justify-between"
      onSubmit={(e) => emailSender(e, doctorEmail)}
    >
      <div className="sm:w-2/5">
        <div className="flex flex-col">
          <label className="text-gray-700 pb-2">Nome</label>
          <input
            placeholder="Inserisci il tuo nome"
            type="text"
            name="name"
            value={name}
            onChange={(e) => handlerInput(e)}
            required
            className="border p-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="flex flex-col my-5">
          <label className="text-gray-700 pb-2">Email</label>
          <input
            placeholder="Inserisci la tua email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => handlerInput(e)}
            required
            className="border p-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="flex flex-col my-5">
          <label className="text-gray-700 pb-2">Oggetto</label>
          <input
            placeholder="Inserisci l'oggetto della mail"
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => handlerInput(e)}
            required
            className="border p-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>
      <div className="sm:w-6/12">
        <div className="flex flex-col flex-wrap">
          <label className="text-gray-700 pb-3">Messaggio</label>
          <textarea
            placeholder="Scrivi il tuo messaggio al dottore"
            name="message"
            value={message}
            onChange={(e) => handlerInput(e)}
            rows={5}
            required
            className="border p-2 border-gray-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-slate-950"
          />
        </div>
        <button className="custom-button w-full !py-3 my-6" type="submit">
          Invia
        </button>
      </div>
    </form>
  );
}

const FinalEmailForm = WithHandlerForm(WithValidation(WithRegistrationForm(EmailForm)), baseForm);
export { FinalEmailForm };
