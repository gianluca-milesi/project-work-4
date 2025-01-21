/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import validator, { isMobilePhone } from 'validator';
import isEmail from 'validator/lib/isEmail';

export function WithValidation(Component){
    return ({data, ...other}) =>{
        const {nome,cognome, email, telefono, indirizzo, specializzazione} = data
      console.log(email)
        const nameSurnameRegEx = /^[A-Za-zÀ-ÿ']+([ -][A-Za-zÀ-ÿ']+)*$/;                                
        const stringRegEx = /^[a-zA-ZàèéìòùÀÈÉÌÒÙ\s]+$/;
        const addressRegEx = /^([Vv]ia|[Cc]orso|[Pp]iazza|[Vv]iale|[Ll]argo|[Ss]trada|[Cc]ont[tr]ada|[Ff]razione|[Bb]orgo)\s+[A-Za-zÀ-ÿ\s']+(?:\s+\d+[A-Za-z]?)?,?\s*(\d{5}\s+)?[A-Za-zÀ-ÿ\s]+$/;
        
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
            if(!addressRegEx.test(indirizzo)){
              return {valid: false , msg: 'indirizzo non valida'}  
            }
            if(!stringRegEx.test(specializzazione)){
              return {valid: false , msg: 'specializzazione non valida'}  
            }

            return {valid:true, msg:'tutto ok'}
        }

        return <Component Validation={inputValidation} data = {data} {...other}/>
    }
}