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
  biografia: "",
  immagine: null,
};

export function AddDoctorForm({ data, handlerInput, sender, handleFile }) {
  const {
    nome,
    cognome,
    email,
    telefono,
    indirizzo,
    specializzazione,
    biografia,
  } = data;
  return (
    <div className="container text-black">
      <form
        className="flex flex-col gap-4 justify-center items-center custom-bg-form"
        encType="multipart/form-data"
        onSubmit={(e) => sender(e)}
      >
        <h1 className="font-medium text-2xl pb-3">Inserisci qui i tuoi dati</h1>

        <input
          type="text"
          name="nome"
          value={nome}
          onChange={(e) => handlerInput(e)}
          className="border-2 rounded-2xl p-3 mx-5 w-11/12"
          placeholder="inserisci nome..."
          minLength="4"
          required
        />
        <input
          type="text"
          name="cognome"
          value={cognome}
          onChange={(e) => handlerInput(e)}
          className="border-2 rounded-2xl p-3 mx-5 w-11/12"
          placeholder="inserisci cognome.."
          minLength="4"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => handlerInput(e)}
          className="border-2 rounded-2xl p-3 mx-5 w-11/12"
          placeholder="inserisci email..."
          required
        />
        <input
          type="number"
          name="telefono"
          value={telefono}
          onChange={(e) => handlerInput(e)}
          className="border-2 rounded-2xl text-black p-3 mx-5 w-11/12"
          placeholder="inserisci telefono..."
          pattern="\d{10}"
          required
        />
        <input
          type="text"
          name="indirizzo"
          value={indirizzo}
          onChange={(e) => handlerInput(e)}
          className="border-2 rounded-2xl p-3 mx-5 w-11/12"
          placeholder="via, piazza... numero civico, citta"
          required
        />
        <input
          type="text"
          name="specializzazione"
          value={specializzazione}
          onChange={(e) => handlerInput(e)}
          className="border-2 rounded-2xl p-3 mx-5 w-11/12"
          placeholder="inserisci specializzazione..."
          required
        />
        <input
          type="file"
          name="immagine"
          onChange={(e) => handleFile(e)}
          className="border-2 rounded-2xl mx-5 w-10/12"
          placeholder="inserisci immagine..."
        />
        <textarea
          type="text"
          name="biografia"
          value={biografia}
          onChange={(e) => handlerInput(e)}
          className="border-2 rounded-2xl p-3 mx-5 w-11/12"
          placeholder="inserisci biografia..."
          rows="3"
          required
        />
        <button className="bg-cyan-300 text-2xl custom-button py-3 hover:bg-cyan-600 w-4/12">
          invia
        </button>
      </form>
    </div>
  );
}

const FinalAddDoctorForm = WithHandlerForm(
  WithValidation(WithRegistrationForm(AddDoctorForm)),
  baseForm
);

export { FinalAddDoctorForm };
