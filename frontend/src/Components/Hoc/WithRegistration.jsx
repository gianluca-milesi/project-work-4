/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import {insertDoctorUrl} from "../../utils/utils"
import { useNavigate } from "react-router";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { useParams } from 'react-router-dom';


export function WithRegistrationForm(Component){
    return ({data, validation, resetForm, validationRev, ...other})=>{
        const {id} = useParams()
        const {setMsgToast, setSeeToast} = useContext(GlobalContext)
    

        async function sendDoctor(event){
            event.preventDefault()
            //trim input
            data.nome = data.nome ? data.nome.trim() : "";
            data.cognome = data.cognome ? data.cognome.trim() : "";
            data.telefono = data.telefono ? data.telefono.trim() : "";
            data.specializzazione = data.specializzazione ? data.specializzazione.trim() : "";

            const formData = new FormData(); //creo oggetto form data
            Object.keys(data).forEach((key) => { //aggiungo i dati del form a formData
                formData.append(key, data[key]);
            });

            if(data.immagine){// se il file esiste lo metto come campo
                formData.append("immagine", data.immagine); 
            }
            
            //eseguo la validazione
            const result = validation()
            //se validazione va bene faccio chiamata
            if(result.valid){
             try{
                const result = await axios.post(insertDoctorUrl, formData,{ headers: {
                    "Content-Type": "multipart/form-data",//serve a far capire al be che c'è la possibilita che ci siano file
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
        
        async function sendReview(event){
            event.preventDefault()
           
            const result = validationRev()
            if(result.valid){
             try{
                const result = await axios.post(insertDoctorUrl+`/${id}/review`, data)
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
        return <Component sender={sendDoctor} reviewSender={sendReview} data={data} {...other}/>
    }
}