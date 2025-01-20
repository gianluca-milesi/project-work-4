const connection = require('../data/db.js')


//Index
function index(req, res) {
    const sql = `SELECT * FROM medici`
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ message: err.message })

        //riscrivere la proprietà image per far combaciare il path per il forntend
        results.forEach((medic) => {
            medic.immagine = `${process.env.BE_HOST}public/img/${medic.immagine}`
        })

        res.json(results)
    })
}


//Show
function show(req, res) {
    const id = req.params.id

    let sql = `
        SELECT medici.*, Coalesce( Avg( voto ), 0 ) As avgVote
        FROM medici
        left JOIN recensioni
        ON medici.id = recensioni.medico_id
        WHERE medici.id = ?
        GROUP BY medici.id;
    `
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message })

        //controllo
        if (results.length === 0)
            return res.status(400).json({
                error: "Medic not found",
                message: "Medic not found"
            })


        const medic = results[0]
        //riscrivere la proprietà image per far combaciare il path per il forntend
        // medic.immagine = `${process.env.BE_HOST}/img/${medic.immagine}`

        let sql = `SELECT * FROM recensioni WHERE medico_id = ?`
        connection.query(sql, [id], (err, results) => {
            if (err) return res.status(500).json({ message: err.message })
            medic.recensioni = results

            res.json(medic)
        })
    })
}







//Store Review
function storeReview(req, res) {
    const id = req.params.id

    const { nome, testo, voto } = req.body

    const sql = "INSERT INTO recensioni (nome, testo, voto, medico_id) VALUES (?, ?, ?, ?)"
    connection.query(sql, [nome, testo, voto, id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message })
        res.status(201).json({ message: "Review added" })
    })
}



module.exports = { index, show, storeReview }