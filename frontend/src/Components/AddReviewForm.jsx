/* eslint-disable react/prop-types */
import { WithHandlerForm } from "./Hoc/WithHandlerForm";
import { WithRegistrationForm } from "./Hoc/WithRegistration";
import { WithValidation } from "./Hoc/WithValidation";

const baseForm={
    text:"",
    vote:"",
    name:""
}

export function AddReviewForm({data, handlerInput, sendReview}){

    const {text, vote, name} = data
    return(
        <div className="container">
        <form className="flex flex-col gap-4 justify-center items-center my-10" encType="multipart/form-data" onSubmit={(e)=>sendReview(e)}>
          <textarea
            name="text"
            id="textarea"
            onChange={(e) => handlerInput(e)}
            className="border-2 mx-5 w-3/12"
            value={text}
            placeholder="insercisci la tua recensione"
          ></textarea>
          <input
            type="number"
            name="vote"
            value={vote}
            onChange={(e) => handlerInput(e)}
            className="border-2 mx-5 w-3/12"
            placeholder="inserisci valutazione.."
            min="1"
            max="5"
            required
          />
          <input
            type="text"
            name="name"
            value={name}
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