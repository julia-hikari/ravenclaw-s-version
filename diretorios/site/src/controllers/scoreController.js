var scoreModel = require("../models/scoreModel");

function score(req,res){
    var pontuacao = req.body.scoreServer
    var idUsuario = req.body.idUsuarioServer;
    scoreModel.score(pontuacao, idUsuario)
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
    score
}