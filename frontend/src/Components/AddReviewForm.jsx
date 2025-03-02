/* eslint-disable react/prop-types */
import { WithHandlerForm } from "./Hoc/WithHandlerForm";
import { WithRegistrationForm } from "./Hoc/WithRegistration";
import { WithValidation } from "./Hoc/WithValidation";

const baseForm = {
  text: "",
  voto: 1,
  nome: "",
};

export function AddReviewForm({ data, handlerInput, reviewSender }) {
  const { text, voto, nome } = data;
  return (
    <div className="container bgsecondary rounded-lg">
      <h1 className="text-center pb-6 text-2xl">Aggiungi una Recensione</h1>
      <form
        className="flex flex-col gap-4 justify-center items-center px-5 py-2"
        encType="multipart/form-data"
        onSubmit={(e) => reviewSender(e)}
      >
        <div className="w-full flex justify-between items-center">
          <input
            type="text"
            name="nome"
            value={nome}
            onChange={(e) => handlerInput(e)}
            className="border-2 rounded-2xl p-2 w-5/12"
            placeholder="Nome..."
            required
          />
          <div>
            <label htmlFor="voto" className="text-lg">
              {" "}
              Voto:{" "}
            </label>
            <select
              name="voto"
              value={voto}
              onChange={(e) => handlerInput(e)}
              className="border-2 rounded-2xl mx-5 p-2 text-center"
              placeholder=""
              required
            >
              {[1, 2, 3, 4, 5].map((val) => (
                <option key={val} value={val}>
                  <span className="bg-yellow-400">⭐ </span>
                  {val}
                </option>
              ))}
            </select>
          </div>
        </div>
        <textarea
          name="text"
          id="textarea"
          onChange={(e) => handlerInput(e)}
          className="border-2 rounded-2xl p-3 mx-5 w-full"
          value={text}
          placeholder="Inserisci la tua recensione"
        ></textarea>
        <button className="custom-button !px-16 !py-2">Invia</button>
      </form>
    </div>
  );
}

const AddReviewFinalForm = WithHandlerForm(
  WithValidation(WithRegistrationForm(AddReviewForm)),
  baseForm
);

export { AddReviewFinalForm };
