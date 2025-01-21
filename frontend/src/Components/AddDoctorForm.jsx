/* eslint-disable react/prop-types */
import { WithHandlerForm } from "./Hoc/WithHandlerForm";
import { WithValidation } from "./Hoc/WithValidation";
import { WithRegistrationForm } from "./Hoc/WithRegistration";
const baseForm = {
  nome: "",
  cognome: "",
  email: "",
  telefono: 0,
  indirizzo: "",
  specializzazione: "",
};

export function AddDoctorForm({ data, handlerInput, Validation }) {
  const { nome, cognome, email, telefono, indirizzo, specializzazione } = data;

  function puzzo(event){
    event.preventDefault()
    console.log(Validation())
  }
  return (
    <div className="container">
      <form className="flex flex-col gap-4 justify-center items-center my-10" onSubmit={puzzo}>
        <input
          type="text"
          name="nome"
          value={nome}
          onChange={(e) => handlerInput(e)}
          className="border-2 mx-5 w-3/12"
          placeholder="inserisci nome..."
          minLength="3"
          required
        />
        <input
          type="text"
          name="cognome"
          value={cognome}
          onChange={(e) => handlerInput(e)}
          className="border-2 mx-5 w-3/12"
          placeholder="inserisci cognome.."
          minLength="3"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => handlerInput(e)}
          className="border-2 mx-5 w-3/12"
          placeholder="inserisci email..."
          required
        />
        <input
          type="number"
          name="telefono"
          value={telefono}
          onChange={(e) => handlerInput(e)}
          className="border-2 mx-5 w-3/12"
          placeholder="inserisci telefono..."
          minLength="9"
          maxLength="10"
          required
        />
        <input
          type="text"
          name="indirizzo"
          value={indirizzo}
          onChange={(e) => handlerInput(e)}
          className="border-2 mx-5 w-3/12"
          placeholder="inserisci indirizzo..."
          required
        />
        <input
          type="text"
          name="specializzazione"
          value={specializzazione}
          onChange={(e) => handlerInput(e)}
          className="border-2 mx-5 w-3/12"
          placeholder="inserisci specializzazione..."
          required
        />
        <button className="bg-cyan-300 rounded-md px-2 h-10 hover:bg-cyan-600 w-3/12">
          invia
        </button>
      </form>
    </div>
  );
}

const FinalAddDoctorForm = WithHandlerForm(WithValidation(AddDoctorForm), baseForm);

export { FinalAddDoctorForm };
