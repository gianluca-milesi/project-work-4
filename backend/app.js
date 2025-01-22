const express = require("express")
const app = express()
const port = 3000
const cors = require("cors")
app.use(
    cors({
        origin: process.env.CORS_ORIGIN
    })
)

const medicRouter = require("./routers/medicRouter.js")

//Middlewares
app.use(express.static("public"))
app.use(express.json()) //per il body nel controller
const notFound = require("./middlewares/notFound.js")
const errorsHandler = require("./middlewares/errorsHandler.js")
const fileUpload = require("express-fileupload")
app.use(fileUpload())

app.get("/", (req, res) => {
    res.send("Root")
})
app.get("/cercapercorso",(req, res)=> {
    const uploadsPath = __dirname + "/public/DoctorImg"
    console.log(__dirname)
    console.log(uploadsPath)
    res.send(uploadsPath)
})
app.use("/api/doctors", medicRouter)

app.use(errorsHandler)
app.use(notFound)


app.listen(port, () => {
    console.log(`Server port: ${port}`)
})