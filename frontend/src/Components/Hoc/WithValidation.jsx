/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import validator, { isMobilePhone } from 'validator';
import isEmail from 'validator/lib/isEmail';

export function WithValidation(Component){
    return ({data, ...other}) =>{
      const {nome,cognome, email, telefono, indirizzo, specializzazione, immagine} = data
      
        const nameSurnameRegEx = /^[A-Za-zÀ-ÿ']+([ -][A-Za-zÀ-ÿ']+)*$/;                                
        const stringRegEx = /^[a-zA-ZàèéìòùÀÈÉÌÒÙ\s]+$/;

        function validateImageExtension(file) {
          const allowedExtensions = ["jpg", "jpeg", "png"];
          const extension = file.name.split('.').pop().toLowerCase();
          return allowedExtensions.indexOf(extension) !== -1;
        }
        
        function validateAddress(address) {
          // Regex per il prefisso della via
          const prefixRegex = /^(Via|Corso|Piazza|Viale|Largo|Strada|Frazione|Borgo)/i;
          const streetNameRegex = /[A-Za-zÀ-ÿ\s]+/;
          const cityRegex = /(?:,\s*| )([A-Za-zÀ-ÿ\s]+)$/;
        
          if (!address.match(prefixRegex)) {
            return { valid: false, msg: "Prefisso della via non valido" };
          }
          // Regex per la parte del nome della via
          if (!address.match(streetNameRegex)) {
            return { valid: false, msg: "Nome della via non valido" };
          }
        
          // Regex per la città (con o senza virgola)
          if (!address.match(cityRegex)) {
            return { valid: false, msg: "Città non valida" };
          }
    
          return { valid: true, msg: "Indirizzo valido" };
        }
        
        function inputValidation(){
            if(!nameSurnameRegEx.test(nome)){
             console.log(nome)
             return {valid: false , msg: 'nome non valido'}
            }
            if(!nameSurnameRegEx.test(cognome)){
             return {msg: 'cognome non valido'}
            }
            if(!isEmail(email)){
              return {valid: false , msg: 'email non valida'}  
            }
            if(!isMobilePhone(telefono) || telefono.length != 10){
                return {valid: false , msg: 'telefono non valido'}  
            }
            if(!validateAddress(indirizzo).valid){
              return {valid: false , msg: 'indirizzo non valido'}  
            }
            if(!stringRegEx.test(specializzazione)){
              return {valid: false , msg: 'specializzazione non valida'}  
            }
            if(!validateImageExtension(immagine)){
              return { valid: false, msg: "file non valido, inserisci foto" };
            }
            return {valid:true, msg:'tutto ok'}
        }

        return <Component validation={inputValidation} data = {data} {...other}/>
    }
}