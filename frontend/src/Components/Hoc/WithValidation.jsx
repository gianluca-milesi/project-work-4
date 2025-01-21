/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
export function WithValidation(Component){
    return (props) =>{
        const {nome,cognome, email, telefono, indirizzo, specializzazione} = props

        const nameSurnameRegEx = /^[A-Za-zÀ-ÿ']+([ -][A-Za-zÀ-ÿ']+)*$/;                                
        const numberTelRegEx = /\+?\d{1,3}?[ .-]?\(?\d{2,4}\)?[ .-]?\d{3,4}[ .-]?\d{4}/
        const stringRegEx = /^[a-zA-ZàèéìòùÀÈÉÌÒÙ\s]+$/;
        const emailRegEx =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const addressRegEx = /^([Vv]ia|[Cc]orso|[Pp]iazza|[Vv]iale|[Ll]argo|[Ss]trada|[Cc]ont[tr]ada|[Ff]razione|[Bb]orgo)\s+[A-Za-zÀ-ÿ\s']+(?:\s+\d+[A-Za-z]?)?,?\s*(\d{5}\s+)?[A-Za-zÀ-ÿ\s]+$/;
        
        function Validation(){
            if(nameSurnameRegEx.test(nome)){
             return {valid: false , msg: 'nome non valido'}
            }
            if(nameSurnameRegEx.test(cognome)){
             return {valid: false , msg: 'nome non valido'}
            }
            if(emailRegEx.test(email)){
              return {valid: false , msg: 'email non valida'}  
            }
            if(numberTelRegEx.test(telefono)){
                return {valid: false , msg: 'telefono non valido'}  
            }
            if(addressRegEx.test(indirizzo)){
              return {valid: false , msg: 'email non valida'}  
            }
            if(stringRegEx.test(specializzazione)){
              return {valid: false , msg: 'specializzazione non valida'}  
            }

            return {valid:true, msg:'tutto ok'}
        }

        return <Component Validation={Validation} {...props}/>
    }
}