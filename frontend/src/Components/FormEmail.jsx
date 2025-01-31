/* eslint-disable react/prop-types */
import { WithHandlerForm } from "./Hoc/WithHandlerForm";
import { WithRegistrationForm } from "./Hoc/WithRegistration";
import { WithValidation } from "./Hoc/WithValidation";
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
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handlerInput(e)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => handlerInput(e)}
          required
        />
      </div>
      <div>
        <label>object:</label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => handlerInput(e)}
          required
        />
      </div>
      <div>
        <label>Messaggio:</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => handlerInput(e)}
          required
        />
      </div>
      <button className="custom-button" type="submit">Invia</button>
    </form>
  );
}

const FinalEmailForm = WithHandlerForm(WithValidation(WithRegistrationForm(EmailForm)), baseForm);
export {FinalEmailForm}