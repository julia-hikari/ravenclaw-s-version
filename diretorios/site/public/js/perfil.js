
var house = sessionStorage.getItem('CASA_USUARIO');
console.log(house)

function selectHouse() {
    if (house == 1) {
        document.body.style = "background-color: rgba(35, 39, 255, 0.938);"
        banner.innerHTML = `<img class="banner" src="assets/giphy.gif">`
        kpi1.innerHTML = `Atualmente, temos <span id="spanKPI1"></span> membros cadastrados na Corvinal`
        kpi2.innerHTML = `A média de acertos no Quiz dos integrantes da sua casa é <span id="spanMedia"></span>`
    }
    else if (house == 2) {
        document.body.style = "background-color: rgba(0, 141, 19, 0.938);"
        banner.innerHTML = `<img class="banner" src="assets/sly.gif">`
        kpi1.innerHTML = `Atualmente, temos <span id="spanKPI1"></span> membros cadastrados na Sonserina`
        kpi2.innerHTML = `A média de acertos no Quiz dos integrantes da sua casa é <span id="spanMedia"></span>`
    }
    else if (house == 3) {
        document.body.style = "background-color: rgba(255, 251, 35, 0.938);"
        banner.innerHTML = `<img class="banner" src="assets/huff.gif">`
        kpi1.innerHTML = `Atualmente, temos <span id="spanKPI1"></span> membros cadastrados na Lufa-lufa`
        kpi2.innerHTML = `A média de acertos no Quiz dos integrantes da sua casa é <span id="spanMedia"></span>`
    }
    else {
        document.body.style = "background-color: rgba(216, 10, 10, 0.938);"
        banner.innerHTML = `<img class="banner" src="assets/gry.gif">`
        kpi1.innerHTML = `Atualmente, temos <span id="spanKPI1"></span> membros cadastrados na Grifinória`
        kpi2.innerHTML = `A média de acertos no Quiz dos integrantes da sua casa é <span id="spanMedia"></span>`
    }
    
}
function getData(){
    fetch("/dash/searchData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            casaServer: house
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(json => {
                spanKPI1.innerHTML = json.houseUsers
                spanMedia.innerHTML = json.avgpoints
            })
        } else {
            console.log("Houve um erro ao tentar realizar coletar os dados!");
            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}
    const ctx = document.getElementById('myChart');
    var corvinal = 0
    function getData(){
    fetch("/dash/searchData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            casaServer: house
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(json => {
                corvinal = json.qtdCorvinal
            })
        } else {
            console.log("Houve um erro ao tentar realizar coletar os dados!");
            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [
    'Corvinal',
    'Sonserina',
    'Lufa-lufa',
    'Grifinória'
  ],
    datasets: [{
    label: 'quantidade de membros',
    data: [corvinal, 50, 100, 100],
    backgroundColor: [
      'rgba(35, 39, 255)',
      'rgba(0, 141, 19, 0.938)',
      'rgba(255, 251, 35, 0.938)',
      'rgba(216, 10, 10, 0.938)'
    ],
    hoverOffset: 4
  }]
  }
});
