const express = require("express");
const router = express.Router();
const medicController = require("../controllers/medicController.js");
const {
  checkVoidInputsDoctor,
  checkVoidInputsReview,
  checkValueInputReview,
  checkValuesInputDoctor,
  checkEmail,
  checkAddress,
  checkNameSurname,
  checkExistingEmail,
} = require("../middlewares/utils.js");

// Index
router.get("/", medicController.index);

// Show
router.get("/:id", medicController.show);

// Store
router.post(
  "/",
  checkVoidInputsDoctor,
  checkNameSurname,
  checkEmail,
  checkAddress,
  checkValuesInputDoctor,
  checkExistingEmail,
  medicController.store
);

// Store Review
router.post(
  "/:id/review",
  checkVoidInputsReview,
  checkValueInputReview,
  medicController.storeReview
);

// Send Email to Professional
router.post("/send-email", medicController.sendEmailToProfessional);

// Send Courtesy Email
router.post("/send-courtesy-email", medicController.sendCourtesyEmail);

module.exports = router;
