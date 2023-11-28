var testeModel = require("../models/testeModel");

function house(req,res){
    var casa = req.body.casaServer;
    var idUsuario = req.body.idUsuarioServer;
    testeModel.house(casa, idUsuario)
    .then(
        function (resultado) {
            res.json(resultado);
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
    house
}