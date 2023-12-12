const express = require("express");
const { getallFaunas, createFloraFauna, updateFauna, getFaunaDetails } = require("../controllers/faunaController");

const router = express.Router();


router.route("/faunas").get(getallFaunas);
router.route("/fauna/new").post(createFloraFauna);
router.route("/fauna/:id").put(updateFauna).get(getFaunaDetails);


module.exports = router