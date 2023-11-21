// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var username = sessionStorage.USERNAME_USUARIO;

    var getQuiz = document.getElementById("quiz");
    var getCasa = document.getElementById("selecao");
    var nUser = document.getElementById("cadastro");
    var sair = document.getElementById("login")

    if (email != null && nome != null) {
        nUser.innerHTML = username;
        sair.innerHTML = `<li onclick="limparSessao()">Sair</li>`
        getQuiz.href = "quizz.html";
        getCasa.href = "selecao.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "index.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

