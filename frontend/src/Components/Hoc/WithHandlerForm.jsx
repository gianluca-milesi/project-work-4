/* eslint-disable react/display-name */
import { useState } from "react"
export function WithHandlerForm(Component, baseForm){
    
    return (props)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [data, setData] = useState(baseForm)
        function changeHandler(event) {
            setData((review) => {
            return {
              ...review,
              [event.target.name]: event.target.value,
            };
          });
        }
        function handleFile(event) {
          const file = event.target.files[0]; // Prendi il primo file selezionato
          
          if (file) {
            setData((prevData) => ({
              ...prevData,
              immagine: file, // Memorizza l'oggetto File
            }));
          } else {
            // Se non c'è nessun file selezionato (ad esempio l'utente ha deselezionato)
            setData((prevData) => ({
              ...prevData,
              immagine: null, // Rimuovi il file
            }));
          }
        }

        function resetForm() {
          setData({
            ...baseForm,
            immagine: null, // Reimposta immagine come null
          });
        
          // Resetta manualmente il valore dell'input file (se presente)
          const fileInput = document.querySelector("input[type='file']");
          if (fileInput) {
            fileInput.value = ""; // Reimposta il campo file
          }
        }
        
        return <Component //con questo io ritorno il componente arricchito di nuove props, create in questo componente ma usufruibili nell'import  
                data={data} //passo i valori che dovranno essere mostrati come value
                handlerInput={changeHandler} //passo il gestore per aggiornare gli input
                resetForm={resetForm} 
                handleFile = {handleFile} 
                {...props}/> //queste sono le props che aveva gia il componente  
    }
}