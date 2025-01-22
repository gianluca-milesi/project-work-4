/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import validator, { isMobilePhone } from 'validator';
import isEmail from 'validator/lib/isEmail';

export function WithValidation(Component){
    return ({data, ...other}) =>{
      const {nome,cognome, email, telefono, indirizzo, specializzazione} = data
      
        const nameSurnameRegEx = /^[A-Za-zÀ-ÿ']+([ -][A-Za-zÀ-ÿ']+)*$/;                                
        const stringRegEx = /^[a-zA-ZàèéìòùÀÈÉÌÒÙ\s]+$/;

        function validateAddress(address) {
          // Regex per il prefisso della via
          const prefixRegex = /^(Via|Corso|Piazza|Viale|Largo|Strada|Frazione|Borgo)/i;
          const matchPrefix = address.match(prefixRegex);
          if (!matchPrefix) {
            return { valid: false, msg: "Prefisso della via non valido" };
          }
          // Regex per la parte del nome della via
          const streetNameRegex = /[A-Za-zÀ-ÿ\s]+/;
          const matchStreetName = address.match(streetNameRegex);
          if (!matchStreetName) {
            return { valid: false, msg: "Nome della via non valido" };
          }
          // Regex per il numero civico (con "n" o "n." o numeri civici) - facoltativo
          const numberRegex = /(?:n\.?\s?|\s)?\d+[A-Za-z]*/;
          const matchNumber = address.match(numberRegex);
          // Se ci sono numeri civici e "n" o "n.", facciamo il controllo
          const isNumberValid = matchNumber || true; // È facoltativo, quindi può anche essere "true"
          if (!isNumberValid) {
            return { valid: false, msg: "Numero civico non valido" };
          }
          // Regex per la città (almeno una parola dopo la virgola)
          const cityRegex = /,\s*([A-Za-zÀ-ÿ\s]+)/;
          const matchCity = address.match(cityRegex);
          if (!matchCity) {
            return { valid: false, msg: "Città non valida" };
          }
          return { valid: true, msg: "Indirizzo valido" };
        }
        
        function inputValidation(){
            if(!nameSurnameRegEx.test(nome)){
             return {valid: false , msg: 'nome non valido'}
            }
            if(!nameSurnameRegEx.test(cognome)){
             return {msg: 'nome non valido'}
            }
            if(!isEmail(email)){
              return {valid: false , msg: 'email non valida'}  
            }
            if(!isMobilePhone(telefono)){
                return {valid: false , msg: 'telefono non valido'}  
            }
            if(!validateAddress(indirizzo).valid){
              return {valid: false , msg: 'indirizzo non valido'}  
            }
            if(!stringRegEx.test(specializzazione)){
              return {valid: false , msg: 'specializzazione non valida'}  
            }

            return {valid:true, msg:'tutto ok'}
        }

        return <Component validation={inputValidation} data = {data} {...other}/>
    }
}