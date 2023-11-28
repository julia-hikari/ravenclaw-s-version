var dashModel = require("../models/dashModel")

function searchData(req, res) {
    var casa = req.body.casaServer
    dashModel.countHouse(casa).then((resultado1) => {
    dashModel.avgquiz(casa).then((resultado2) => {
                    console.log(resultado1)
                    console.log(resultado2)
                    res.json({
                        houseUsers: resultado1[0].houseUsers,
                        avgpoints: resultado2[0].avgpoints
                    })
                }).catch(
                    function (erro) {
                        console.log(erro);
                        console.log("\nHouve um erro ao fazer o select count! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao fazer o select count! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

module.exports = {
    searchData
}