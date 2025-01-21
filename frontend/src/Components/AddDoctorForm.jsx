import { WithHandlerForm } from "./Hoc/WithHandlerForm"

const baseForm={
    nome:'',
    cognome:'',
    email:'',
    telefono:0,
    indirizzo: '',
    specializzazione:'' 
}

export function AddDoctorForm(){
    return(
        <div className="container">
         <form className="flex flex-col gap-4 justify-center items-center my-10">
           <input type="text" className="border-2 mx-5 w-3/12" placeholder="inserisci nome..." minLength="3" required/>
           <input type="text" className="border-2 mx-5 w-3/12" placeholder="inserisci cognome.." minLength="3" required/>
           <input type="email" className="border-2 mx-5 w-3/12" placeholder="inserisci email..." required/>
           <input type="number" className="border-2 mx-5 w-3/12" placeholder="inserisci telefono..." minLength="9" maxLength="10" required/>
           <input type="text" className="border-2 mx-5 w-3/12" placeholder="inserisci indirizzo..." required/>       
           <input type="text" className="border-2 mx-5 w-3/12" placeholder="inserisci specializzazione..." required/>
           <button className="bg-cyan-300 rounded-md px-2 h-10 hover:bg-cyan-600 w-3/12">invia</button>
         </form>
        </div>
    )
}

const FinalAddDoctorForm= WithHandlerForm(AddDoctorForm,baseForm)

export {FinalAddDoctorForm}