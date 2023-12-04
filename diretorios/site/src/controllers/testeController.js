var testeModel = require("../models/testeModel");

function house(req, res) {
    var casa = req.body.casaServer;
    var idUsuario = req.body.idUsuarioServer;

    testeModel.house(casa, idUsuario)
        .then(
            function (resultado1) {
                res.json(resultado1);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o registro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function feedbackTest(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var casa = req.body.casaServer;
    var feedback = req.body.feedbackServer;

    testeModel.feedbackTest(idUsuario, casa, feedback)
    .then(
        function (resultado2) {
            res.json(resultado2);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o registro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    house,
    feedbackTest
}