// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var username = sessionStorage.USERNAME_USUARIO;

    var getQuiz = document.getElementById("quiz");
    var getCasa = document.getElementById("selecao");
    var nUser = document.getElementById("cadastro");
    var sair = document.getElementById("login");

    if (email != null && nome != null) {
        nUser.innerHTML = `<li onclick="openProfile()"><a class="linkList">${username}</a></li>`;
        sair.innerHTML = `<li onclick="limparSessao()"><a class="linkList">Sair</a></li>`;
        getQuiz.href = "quizz.html";
        getCasa.href = "selecao.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "index.html";
}
function openProfile() {
    window.location = "perfil.html";
}


// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("loader");
    divAguardar.style.display = "block";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("loader");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("cardLogin");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

