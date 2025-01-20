const express = require("express")
const router = express.Router()
const medicController = require("../controllers/medicController.js")
const {checkVoidInputsDoctor, checkVoidInputsReview, checkValueInputReview, checkValuesInputDoctor, checkEmail, checkAddress} = require("../middlewares/utils.js")


//Index
router.get("/", medicController.index)

//Show
router.get("/:id", medicController.show)

//Store
router.post("/", checkVoidInputsDoctor, checkEmail, checkAddress, checkValuesInputDoctor, medicController.store)

//Store
router.post("/:id/review", checkVoidInputsReview, checkValueInputReview, medicController.storeReview)


module.exports = router