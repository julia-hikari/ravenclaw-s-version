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
    select round(avg(tentativa.pontuacao),1) as avgpoints
    from tentativa join usuario on fkUsuario = idUsuario
    where fkCasa = '${casa}';

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function space1(){
    var qtdCorvinal = `select count(*) as qtdCorvinal from usuario where fkCasa = 1; `;
    console.log("Executando a instrução SQL: \n" + qtdCorvinal);
    return database.executar(qtdCorvinal);
}
function space2(){
    var qtdSonserina = `select count(*) as qtdSonserina from usuario where fkCasa = 2;`;
    console.log("Executando a instrução SQL: \n" + qtdSonserina);
    return database.executar(qtdSonserina);
 
}

function space3(){
    var qtdLufa = `select count(*) as qtdLufa from usuario where fkCasa = 3;`;
    console.log("Executando a instrução SQL: \n" + qtdLufa);
    return database.executar(qtdLufa);
}

function space4(){
    var qtdGrifinoria = `select count(*) as qtdGrifinoria from usuario where fkCasa = 4;`;
    console.log("Executando a instrução SQL: \n" + qtdGrifinoria);
    return database.executar(qtdGrifinoria);
}

module.exports = {
    countHouse,
    avgquiz,
    space1,
    space2,
    space3,
    space4
};