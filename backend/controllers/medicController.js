const connection = require('../data/db.js')
const path = require('path');

//Inde
function index(req, res) {
    const sql = `SELECT * FROM medici`
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ message: err.message })

        //riscrivere la proprietà image per far combaciare il path per il forntend
        results.forEach((medic) => {
            medic.immagine = `${process.env.BE_HOST}/DoctorImg/${medic.immagine}`
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
        medic.immagine = `${process.env.BE_HOST}/DoctorImg/${medic.immagine}`

        let sql = `SELECT * FROM recensioni WHERE medico_id = ?`
        connection.query(sql, [id], (err, results) => {
            if (err) return res.status(500).json({ message: err.message })
            medic.recensioni = results

            res.json(medic)
        })
    })
}


// //Store
// function store(req, res) {
//     const { email, nome, cognome, telefono, indirizzo, specializzazione} = req.body
//     const {immagine} = req.files
//     const uploadsPath = __dirname + '/public/DoctorImg'
//     console.log(uploadsPath)
//     const sql = "INSERT INTO medici (email, nome, cognome, telefono, indirizzo, specializzazione, immagine) VALUES (?, ?, ?, ?, ?, ?, ?)"
//     connection.query(sql, [email, nome, cognome, telefono, indirizzo, specializzazione, immagine[0].name], (err, results) => {
//         if (err) return res.status(500).json({ message: err.message })

//         const imagefinalPath = uploadsPath +"/"+ immagine[0].name
     
//         console.log(imagefinalPath)
//         immagine[0].mv(imagefinalPath, (err)=>{
//             if (err) return res.status(500).json({ message: "err.message2" })

//             res.status(201).json({ message: "Medic added" })
//         })

//     })
// }

function store(req, res) {
    const { email, nome, cognome, telefono, indirizzo, specializzazione, biografia} = req.body;
    let finalImg = null
     if(req.files){
     const { immagine } = req.files;
     finalImg = immagine[0].name
     //creo il percorso concatenando il path name, torno indietro di una directory perche altrimenti entra in controller, 
     // gli dico di aggiungere public e doctorimg 
     const uploadsPath = path.join(__dirname, '..', 'public', 'DoctorImg', immagine[0].name);
     
     // Sposta il file prima di salvare nel database
     immagine[0].mv(uploadsPath, (err) => {
         if (err) {
             return res.status(500).json({ message: "Errore nel caricamento dell'immagine: " + err.message });
         }
         
         console.log("Immagine caricata con successo: ", uploadsPath);
    });}
        // Dopo aver spostato il file, inserisci nel database
        const sql = "INSERT INTO medici (email, nome, cognome, telefono, indirizzo, specializzazione, immagine, biografia) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        connection.query(sql, [email, nome, cognome, telefono, indirizzo, specializzazione, finalImg, biografia], (err, results) => {
            if (err) {
                return res.status(500).json({ message: "Errore nel salvataggio nel database: " + err.message });
            }

            res.status(201).json({ message: "Medico aggiunto con successo!" });
        });
    
}

//Store Review
function storeReview(req, res) {
    const id = req.params.id
    const { nome, text, voto } = req.body
    
    const sql = "INSERT INTO recensioni (nome, testo, voto, medico_id) VALUES (?, ?, ?, ?)"
    connection.query(sql, [nome, text, voto, id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message })
        res.status(201).json({ message: "Review added" })
    })
}



module.exports = { index, show, store, storeReview }