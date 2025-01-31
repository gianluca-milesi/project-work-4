/* eslint-disable react/prop-types */
import { WithHandlerForm } from "./Hoc/WithHandlerForm";
import { WithRegistrationForm } from "./Hoc/WithRegistration";

const baseForm = {
  name: "",
  email: "",
  message: "",
  subject: ""
};

function EmailForm({ data, handlerInput, emailSender, doctorEmail}) {
 const { name, email, message, subject} = data;

  return (
    <form onSubmit={(e)=>emailSender(e, doctorEmail)}>
      <div className="flex flex-wrap gap-4 mb-4">      
        <div className="flex flex-col">
          <label className="text-gray-700">Nome</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => handlerInput(e)}
            required
            className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => handlerInput(e)}
            required
            className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"

          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">Oggetto</label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => handlerInput(e)}
            required
            className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"

          />
        </div>
      </div>
      <div  className="flex flex-col mb-4">
        <label className="text-gray-700">Messaggio</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => handlerInput(e)}
          required
          className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"

        />
      </div>
      <button className="custom-button px-3 mt-2" type="submit">Invia</button>
    </form>
  );
}

const FinalEmailForm = WithHandlerForm(WithRegistrationForm(EmailForm), baseForm);
export {FinalEmailForm}