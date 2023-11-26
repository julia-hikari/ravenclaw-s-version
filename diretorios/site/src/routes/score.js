var express = require("express");
var router = express.Router();

var resultadoQuizController = require("../controllers/scoreController");


router.post("/scoreQuiz", function (req, res) {
    resultadoQuizController.score(req, res);
});

module.exports = router;