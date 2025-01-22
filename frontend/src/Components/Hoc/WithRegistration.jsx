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
            console.log(data)
            //trim input
            data.nome =  data.nome.trim()
            data.cognome = data.cognome.trim()
            data.telefono = data.telefono.trim()
            
            data.specializzazione = data.specializzazione.trim()
            //esguo la validazione
            const result = validation()
            //se validazione va bene faccio chiamata
            if(result.valid){
             try{
                const result = await axios.post(insertDoctorUrl, data)
                setSeeToast(true)
                setMsgToast(result.data.message)
                resetForm()
             }catch({response}){//se chiamata va male mando a schermo messaggio
                setSeeToast(true)
                setMsgToast(response.data.error) 
             }
            }else{ //output errore validazione
                setSeeToast(true)
                setMsgToast(result.msg) 
            }
        }
        
        return <Component sender={sendDoctor} data={data} {...other}/>
    }
}