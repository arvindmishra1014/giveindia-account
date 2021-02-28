const { Router } = require("express");
const { validate } = require("express-validation");
// Controllers
const { transferMoneyController } = require("../controllers/common");

// middlewares
const validationSchema = require("../application/validations");
const { canAccess } = require("../application/middlewares/access");
const authenticated = require("../application/middlewares/authentication");

const router = Router();

router.post(
    "/transfer-money",
    // authenticated,
    canAccess(["anonymous"]),
    validate(validationSchema.transferMoneyValidation, {}, {}),
    transferMoneyController
);

module.exports = router;
