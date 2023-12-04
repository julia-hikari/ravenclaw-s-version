var express = require("express");
var router = express.Router();

var testeController = require("../controllers/testeController");


router.post("/houseUser", function (req, res) {
    testeController.house(req, res);
});
router.post("/feedbackUser", function (req, res) {
    testeController.feedbackTest(req, res);
});

module.exports = router;