var database = require("../database/config")

function countHouse(casa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function house(): ", casa)
    var instrucao = `
    select count(*) as houseUsers from usuario where fkCasa = '${casa}';

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function avgquiz(casa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function avgquiz(): ", casa)
    var instrucao = `
    select round(avg(pontuacaoQuizz.pontuacao),1) as avgpoints
    from pontuacaoQuizz join usuario on fkUsuario = idUsuario
    where fkCasa = '${casa}';

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    countHouse,
    avgquiz
};