const express = require("express");
const { Payment, sendStripeApiKey } = require("../controller/PaymentController");
const router = express.Router();
const {isAuthenticatedUser} = require("../middleware/auth");

router.route("/payment/process").post(isAuthenticatedUser, Payment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);


module.exports = router;