var dashModel = require("../models/dashModel")

function searchData(req, res) {
    var casa = req.body.casaServer
                dashModel.countHouse(casa)
                .then((resultado)=> {
                    console.log(resultado)
                    res.json({
                        houseUsers: resultado[0].houseUsers
                    })
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