function checkInput(req, res, next){
    const { title, director, genre, release_year, abstract, image } = req.body

    if( !title || !director || !genre || !release_year || !abstract || !image){
        return res.status(500).json({
            error: 'invalid request',
            message: 'dati incompleti',
    })
    }

    next();
}

module.exports = { checkInput }