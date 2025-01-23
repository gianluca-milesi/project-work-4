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
  immagine: null
};

export function AddDoctorForm({ data, handlerInput, sender, handleFile}) {
  const { nome, cognome, email, telefono, indirizzo, specializzazione} = data;
  return (
    <div className="container">
      <form className="flex flex-col gap-4 justify-center items-center my-10" encType="multipart/form-data" onSubmit={(e)=>sender(e)}>
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
          pattern="\d{10}"
          required
        />
        <input
          type="text"
          name="indirizzo"
          value={indirizzo}
          onChange={(e) => handlerInput(e)}
          className="border-2 mx-5 w-3/12"
          placeholder="via, piazza... numero civico citta"
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
        <input
          type="file"
          name="immagine"
          onChange={(e) => handleFile(e)}
          className="border-2 mx-5 w-3/12"
          placeholder="inserisci immagine..."
        />
        <button className="bg-cyan-300 rounded-md px-2 h-10 hover:bg-cyan-600 w-3/12">
          invia
        </button>
      </form>
    </div>
  );
}

const FinalAddDoctorForm = WithHandlerForm(WithValidation(WithRegistrationForm(AddDoctorForm)), baseForm);

export { FinalAddDoctorForm };
