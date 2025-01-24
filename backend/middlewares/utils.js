const  connection  = require('../data/db')

//Controllo campi incompleti 
function checkVoidInputsDoctor(req, res, next) {
    const { email, nome, cognome, telefono, indirizzo, specializzazione, biografia } = req.body

    if (!email || !nome || !cognome || !telefono || !indirizzo || !specializzazione || !biografia) {
        return res.status(500).json({
            error: "invalid request",
            message: "dati incompleti"
        })
    }

    next()
}

function checkVoidInputsReview(req, res, next) {
    const { nome, voto } = req.body
    if (!nome || !voto) {
        return res.status(500).json({
            error: "invalid request",
            message: "dati incompleti"
        })
    }

    next()
}

function checkValueInputReview(req, res, next){
    const { nome, voto} = req.body
    req.body.vote = parseInt(voto)

    const regExp = /^[A-Za-zÀ-ÿ']+([ -][A-Za-zÀ-ÿ']+)*$/;
    if(!isNaN(voto) && (voto <= 5 || voto >= 1)){
        if(regExp.test(nome) && (nome.length<2000 && nome.length>4) && typeof nome === 'string'){
            next();
        } else {
            return res.status(500).json({
                error: 'invalid request',
                message: 'nome non corretto',
            })
        }
    } else {
        return res.status(500).json({
            error: 'invalid request',
            message: 'voto non corretto',
        })
    }
}

function checkValuesInputDoctor(req, res, next) {

    const { telefono, specializzazione, biografia } = req.body
    
    const numberTelReg = /\+?\d{1,3}?[ .-]?\(?\d{2,4}\)?[ .-]?\d{3,4}[ .-]?\d{4}/
    const stringRegExp = /^[a-zA-ZàèéìòùÀÈÉÌÒÙ\s]+$/;
    if (stringRegExp.test(specializzazione) && specializzazione.length < 255 && typeof specializzazione === 'string') {
        if (numberTelReg.test(telefono) && telefono.length == 10) {
            if(biografia.length<2000 && biografia.length>4){
                  next();
                }else{
                  return res.status(500).json({
                      error: 'invalid request',
                      message: 'biografia non valida',
                  })
                }  
        } else {
            return res.status(500).json({
                error: 'invalid request',
                message: 'telefono non valido',
            })
        }
    } else {
        return res.status(500).json({
            error: 'invalid request',
            message: 'specializzazione non valida',
        })
    }
}


//Controllo singoli campi
function checkEmail(req, res, next) {
    const { email } = req.body
    const regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regexp.test(email)) {
        next();
    } else {
        return res.status(500).json({
            error: 'invalid request',
            message: 'email non corretta',
        })
    }
}

function checkAddress(req, res, next) {
    const { indirizzo } = req.body
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


    if (validateAddress(indirizzo).valid) {
        next();
    } else {
        return res.status(500).json({
            error: 'invalid request',
            message: 'indirizzo non corretto',
        })
    }
}

function checkNameSurname(req, res, next) {
    const { nome, cognome } = req.body;
    const regExp = /^[A-Za-zÀ-ÿ']+([ -][A-Za-zÀ-ÿ']+)*$/;

    if (regExp.test(nome) && (nome.length < 255 && nome.length >= 4 )&& typeof nome === 'string') {
        if (regExp.test(cognome) && (cognome.length < 255 && cognome.length >= 4 ) && typeof cognome === 'string') {
            next();
        } else {
            return res.status(400).json({
                error: 'invalid request',
                message: 'Cognome non valido',
            });
        }
    } else {
        return res.status(400).json({
            error: 'invalid request',
            message: 'Nome non valido',
        });
    }
}

function checkExistingEmail(req, res, next){
    const {email} = req.body
    const query = `SELECT * FROM medici`
    connection.query(query, (err, results)=>{

        if(err){
            return res.status(500).json({ error: 'Database query failed' });
        }

        const isPresent = results.find(doc =>doc.email == email )

        if(isPresent){
            return res.status(500).json({ error: 'invalid request', message: 'email gia pesente', });
        } 

        next();
    })
}

module.exports = { checkVoidInputsDoctor, checkVoidInputsReview, checkValueInputReview, checkValuesInputDoctor, checkEmail, checkAddress, checkNameSurname, checkExistingEmail }