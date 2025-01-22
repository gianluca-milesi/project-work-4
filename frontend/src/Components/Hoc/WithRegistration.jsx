/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import {insertDoctorUrl} from "../../Utils/utils"
import { useNavigate } from "react-router";
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../../Utils/GlobalContext";


export function WithRegistrationForm(Component){
    return ({data, validation, resetForm, ...other})=>{

        const {setMsgToast, setSeeToast} = useContext(GlobalContext)
        
        async function sendDoctor(event){
            event.preventDefault()
            //trim input
            data.nome =  data.nome.trim()
            data.cognome = data.cognome.trim()
            data.telefono = data.telefono.trim()
            data.specializzazione = data.specializzazione.trim()
            console.log(data)
            const formData = new FormData(); //creo oggetto form data
            Object.keys(data).forEach((key) => { //aggiungo i dati del form a formData
                formData.append(key, data[key]);
            });

            if(data.immagine){
                formData.append("immagine", data.immagine); 
            }

            //eseguo la validazione
            const result = validation()
            //se validazione va bene faccio chiamata
            if(result.valid){
             try{
                const result = await axios.post(insertDoctorUrl, formData,{ headers: {
                    "Content-Type": "multipart/form-data",
                },})
                setSeeToast(true)
                setMsgToast(result.data.message)
                resetForm()
             }catch({response}){//se chiamata va male mando a schermo messaggio
                setSeeToast(true)
                setMsgToast(response.data.message) 
             }
            }else{ //output errore validazione
                setSeeToast(true)
                setMsgToast(result.msg) 
            }
        }
        
        return <Component sender={sendDoctor} data={data} {...other}/>
    }
}