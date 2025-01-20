function checkVoidInputsDoctor(req, res, next) {
    const { email, nome, cognome, telefono, indirizzo, specializzazione } = req.body

    if (!email || !nome || !cognome || !telefono || !indirizzo || !specializzazione) {
        return res.status(500).json({
            error: "invalid request",
            message: "dati incompleti"
        })
    }

    next()
}

function checkVoidInputsReview(req, res, next) {
    const { nome, testo, voto } = req.body

    if (!nome || !testo || !voto) {
        return res.status(500).json({
            error: "invalid request",
            message: "dati incompleti"
        })
    }

    next()
}

function checkValueInputReview(req, res, next){
    const { name, vote} = req.body
    req.body.vote = parseInt(vote)
    if( isNaN(vote)||(vote > 5 || vote < 0)|| name.length > 255 || typeof name!== 'string'){
        return res.status(500).json({
            error: 'invalid request',
            message: 'dati non corretti',
        })
    }

    next();
}
function checkValuesInputDoctor(req, res, next){
    const { nome, cognome, telefono, specializzazione } = req.body

    if( nome.length > 255 || typeof nome!== 'string' 
        || cognome.length > 255 || typeof cognome!== 'string'
        || specializzazione.length > 255 || typeof specializzazione!== 'string'
        || isNaN(telefono) || telefono.length!=10
    ){
        return res.status(500).json({
            error: 'invalid request',
            message: 'dati non corretti',
        })
    }

    next();
}
function checkEmail(req, res, next){
    const {email} = req.body
    const regexp  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(regexp.test(email)){
     next();
    }else{
     return res.status(500).json({
      error: 'invalid request',
      message: 'email non corretta',
     })
    }  
}

function checkAddress(req, res, next){
    const {indirizzo} = req.body
    const regExp = /^([Vv]ia|[Cc]orso|[Pp]iazza|[Vv]iale|[Ll]argo|[Ss]trada|[Cc]ont[tr]ada|[Ff]razione|[Bb]orgo)\s+[A-Za-zÀ-ÿ\s']+(?:\s+\d+[A-Za-z]?)?,?\s*\d{5}\s+[A-Za-zÀ-ÿ\s]+$/;;
    if(regExp.test(indirizzo)){
        next();
    }else{
     return res.status(500).json({
      error: 'invalid request',
      message: 'indirizzo non corretto',
     })
    }  
}

module.exports = { checkVoidInputsDoctor, checkVoidInputsReview , checkValueInputReview, checkValuesInputDoctor, checkEmail, checkAddress}