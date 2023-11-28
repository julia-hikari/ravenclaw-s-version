var house = sessionStorage.CASA_USUARIO;

function selectHouse() {
    if (house == 1) {
        containerDash.classList.add("rav");
        banner.innerHTML = `<img class="banner" src="assets/giphy.gif">`
        kpi1.innerHTML = `Atualmente, temos <span id="spanKPI1"></span> membros cadastrados na Corvinal`
    }
    else if (house == 2) {
        containerDash.classList.add("sly");
        banner.innerHTML = `<img class="banner" src="assets/sly.gif">`
        kpi1.innerHTML = `Atualmente, temos <span id="spanKPI1"></span> membros cadastrados na Sonserina`
    }
    else if (house == 3) {
        containerDash.classList.add("huf");
        banner.innerHTML = `<img class="banner" src="assets/huff.gif">`
        kpi1.innerHTML = `Atualmente, temos <span id="spanKPI1"></span> membros cadastrados na Lufa-lufa`
    }
    else {
        containerDash.classList.add("gry");
        banner.innerHTML = `<img class="banner" src="assets/gry.gif">`
        kpi1.innerHTML = `Atualmente, temos <span id="spanKPI1"></span> membros cadastrados na Grifinória`
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
