function checkInput(req, res, next) {
    const { nome, testo, voto } = req.body

    if (!nome || !testo || !voto) {
        return res.status(500).json({
            error: "invalid request",
            message: "dati incompleti"
        })
    }

    next()
}

module.exports = { checkInput }