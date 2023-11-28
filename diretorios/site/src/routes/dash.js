var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");


router.post("/searchData", function (req, res) {
    dashController.searchData(req, res);
});

module.exports = router;