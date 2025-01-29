/* eslint-disable react/prop-types */
import { WithHandlerForm } from "./Hoc/WithHandlerForm";
import { WithRegistrationForm } from "./Hoc/WithRegistration";
import { WithValidation } from "./Hoc/WithValidation";

const baseForm={
    text:"",
    voto:1,
    nome:""
}

export function AddReviewForm({data, handlerInput, reviewSender}){

    const {text, voto, nome} = data

    return(
        <div className="container">
        <form className="flex flex-col gap-4 justify-center items-center my-10" encType="multipart/form-data" onSubmit={(e)=>reviewSender(e)}>
          <textarea
            name="text"
            id="textarea"
            onChange={(e) => handlerInput(e)}
            className="border-2 mx-5 w-3/12"
            value={text}
            placeholder="insercisci la tua recensione"
          ></textarea>
          <select name="voto" selected={voto} onChange={(e) => handlerInput(e)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input
            type="text"
            name="nome"
            value={nome}
            onChange={(e) => handlerInput(e)}
            className="border-2 mx-5 w-3/12"
            placeholder="inserisci il tuo nome..."
            required
          />
          <button className="bg-cyan-300 rounded-md px-2 h-10 hover:bg-cyan-600 w-3/12">invia</button>
        </form>
      </div>
    )
}

const AddReviewFinalForm = WithHandlerForm(WithValidation(WithRegistrationForm(AddReviewForm)), baseForm)

export {AddReviewFinalForm}