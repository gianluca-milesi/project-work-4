const express = require("express")
const router = express.Router()
import { checkInput } from "../middlewares/checkInput.js"

const medicController = require("../controllers/medicController.js")


//Index
router.get("/", medicController.index)

//Show
router.get("/:id", medicController.show)

//Store
router.post("/", checkInput, medicController.store)

// //Store
// router.post("/:id/review", medicController.storeReview)


module.exports = router