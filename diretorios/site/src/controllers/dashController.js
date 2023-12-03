var dashModel = require("../models/dashModel")

function searchData(req, res) {
    var casa = req.body.casaServer
    dashModel.countHouse(casa).then((resultado1) => {
        dashModel.avgquiz(casa).then((resultado2) => {
            dashModel.space1().then((resultado3) => {
                dashModel.space2().then((resultado4) => {
                    dashModel.space3().then((resultado5) => {
                        dashModel.space4().then((resultado6) => {
                                console.log(resultado1)
                                console.log(resultado2)
                                console.log(resultado3)
                                console.log(resultado4)
                                console.log(resultado5)
                                console.log(resultado6)
                                res.json({
                                    houseUsers: resultado1[0].houseUsers,
                                    avgpoints: resultado2[0].avgpoints,
                                    qtdCorvinal: resultado3[0].qtdCorvinal,
                                    qtdSonserina: resultado4[0].qtdSonserina,
                                    qtdLufa: resultado5[0].qtdLufa,
                                    qtdGrifinoria: resultado6[0].qtdGrifinoria
                                })
                            }).catch(
                                function (erro) {
                                    console.log(erro);
                                    console.log("\nHouve um erro ao fazer o select do username! Erro: ", erro.sqlMessage);
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