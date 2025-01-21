//Controllo campi incompleti
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
    const { nome, voto } = req.body

    if (!nome || !voto) {
        return res.status(500).json({
            error: "invalid request",
            message: "dati incompleti"
        })
    }

    next()
}


//Controllo valori corretti
function checkValueInputReview(req, res, next) {
    const { nome, voto } = req.body
    req.body.voto = parseInt(voto)

    const regExp = /^[A-Za-zÀ-ÿ']+([ -][A-Za-zÀ-ÿ']+)*$/;
    if (!isNaN(voto) && (voto <= 5 || voto > 0)) {
        if (regExp.test(nome) && nome.length < 255 && typeof nome === 'string') {
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

    const { telefono, specializzazione } = req.body

    const numberTelReg = /\+?\d{1,3}?[ .-]?\(?\d{2,4}\)?[ .-]?\d{3,4}[ .-]?\d{4}/
    const stringRegExp = /^[a-zA-ZàèéìòùÀÈÉÌÒÙ\s]+$/;
    if (stringRegExp.test(specializzazione) && specializzazione.length < 255 && typeof specializzazione === 'string') {
        if (numberTelReg.test(telefono) && telefono.length == 10) {
            next();
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
    const regExp = /^([Vv]ia|[Cc]orso|[Pp]iazza|[Vv]iale|[Ll]argo|[Ss]trada|[Cc]ont[tr]ada|[Ff]razione|[Bb]orgo)\s+[A-Za-zÀ-ÿ\s']+(?:\s+\d+[A-Za-z]?)?,?\s*(\d{5}\s+)?[A-Za-zÀ-ÿ\s]+$/;
    if (regExp.test(indirizzo)) {
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

    if (regExp.test(nome) && nome.length < 255 && typeof nome === 'string') {
        if (regExp.test(cognome) && cognome.length < 255 && typeof cognome === 'string') {
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


module.exports = { checkVoidInputsDoctor, checkVoidInputsReview, checkValueInputReview, checkValuesInputDoctor, checkEmail, checkAddress, checkNameSurname }