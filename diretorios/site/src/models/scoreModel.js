var database = require("../database/config")

function score(pontuacao, idUsuario){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function score(): ", pontuacao)
    var instrucao = `
        insert into pontuacaoQuizz (fkUsuario, fkQuizz, pontuacao) values ('${idUsuario}','1','${pontuacao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    score
};