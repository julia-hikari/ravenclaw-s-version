var questions = [
    {
        question: "Qual animal você escolheria para levar a Hogwarts?",
        answers: [
            { text: "Coruja", correct: 1 },
            { text: "Coruja nevada", correct: 2 },
            { text: "Sapo", correct: 3 },
            { text: "Rato", correct: 3 },
            { text: "Gato persa", correct: 4 },
            { text: "Gato sphynx", correct: 1 },
        ]
    },
    {
        question: "Qual seriam as matérias que você gostaria de ver primeiro em Hogwarts?",
        answers: [
            { text: "Astronomia e Poções", correct: 1 },
            { text: "Duelos e Feitiços", correct: 4 },
            { text: "Defesa contra as artes das trevas e Transfiguração", correct: 2 },
            { text: "Herbologia e Criaturas mágicas", correct: 3 },
        ]
    },
    {
        question: "Qual dos adjetivos abaixo mais te ofenderia caso você fosse chamado?",
        answers: [
            { text: "Falso", correct: 3 },
            { text: "Covarde", correct: 4 },
            { text: "Ignorante", correct: 1 },
            { text: "Irrelevante", correct: 2 },
        ]
    },
    {
        question: "Que tipo de fama você gostaria de ter?",
        answers: [
            { text: "Ser alguém conhecido no mundo todo, mas ser odiado com a mesma intensidade que é amado", correct: 2 },
            { text: "Ser extremamente famoso numa época, mas quase ninguém lembrar de você algum tempo depois", correct: 4 },
            { text: "Nunca ser famoso em vida, mas ser lembrado eternamente depois da morte", correct: 1 },
            { text: "Não ser famoso, mas ser bom e reconhecido pelos colegas de profissão", correct: 3 },
        ]
    },
    {
        question: "Qual a poção que mais gostaria de inventar e usar",
        answers: [
            { text: "Poção da fama", correct: 4 },
            { text: "Poção do amor", correct: 3 },
            { text: "Poção do poder", correct: 2 },
            { text: "Poção da sabedoria", correct: 1 },
        ]
    },
    {
        question: "Entra-se num jardim encantado cheio de coisas misteriosas. Qual deles prefere examinar primeiro?",
        answers: [
            { text: "A estátua de um velho feiticeiro com os olhos estranhamente cintilantes", correct: 1 },
            { text: "A árvore com folhas prateadas carregada de maçãs douradas", correct: 2 },
            { text: "Os enormes cogumelos vermelhos que parecem falar juntos", correct: 3 },
            { text: "A piscina borbulhante no fundo da qual se pode ver algo luminoso que rodopia incansavelmente", correct: 4 },
        ]
    },
    {
        question: "4 baús são colocados à sua frente. Você só tem permissão para abrir um. Qual você escolhe?",
        answers: [
            { text: "O pequeno baú de estanho, simples e despretensioso, no qual se pode ler uma inscrição que diz 'Abro apenas para aquele que merece'", correct: 4 },
            { text: "O baú dourado talhado, estruturado em dois pés com garras, cujo inscrição avisa que contém conhecimentos secretos e tentação irresistível", correct: 2 },
            { text: "O baú negro brilhante com fechadura e chave prateada, cujo tem uma misteriosa inscrição em runa identificada como a assinatura de Merlin", correct: 1 },
            { text: "O pequeno baú de carapaça de tartaruga dourada com ouro fino, que parece conter uma pequena criatura que guincha", correct: 3 },
        ]
    },
    {
        question: "Quatro copos cheios de um líquido misterioso são colocados à sua frente. Qual você escolhe beber?",
        answers: [
            { text: "O que contem uma bebida espessa, cremosa e roxa com um delicioso aroma de chocolate e ameixa", correct: 3 },
            { text: "Aquele que contém um liquido prateado e espumoso que brilha como se contivesse pó de diamante", correct: 1 },
            { text: "Aquele que contém um estranho líquido negro que brilha como tinta e emite vapores causando alucinações estranhas", correct: 2 },
            { text: "Aquele que contém um liquido dourado e brilhante que fere os olhos e o faz ver pontos brilhantes em todo o lado", correct: 4 },
        ]
    },
    {
        question: "Por qual motivo você ficaria na detenção em Hogwarts?",
        answers: [
            { text: "Por bater em um colega para defender um amigo", correct: 4 },
            { text: "Por escrever uma mensagem zombando do seu rival numa parede", correct: 2 },
            { text: "Por invadir a Seção Restrita da biblioteca", correct: 1 },
            { text: "Por tentar explorar a Floresta Proibida", correct: 3 },
        ]
    },
    {
        question: "Um trasgo invadiu a escola e entrou em um dos banheiros. Lá estão dois alunos, uma pessoa que você detesta e uma pessoa que você nunca viu na vida. O que você faz?",
        answers: [
            { text: "Reúne alguns amigos e tenta deter o trasgo", correct: 3 },
            { text: "Nada, afinal, você não tem poder suficiente para detê-lo", correct: 1 },
            { text: "Nada, e torce para que o trasgo ensine uma lição no seu rival", correct: 2 },
            { text: "Invade o banheiro sozinho e tenta deter o trasgo com as armas que você tem", correct: 4 },
        ]
    },
];
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-button");

var questionNow = 0;
var corvinal = 0;
var grifinoria = 0;
var sonserina = 0;
var lufalufa = 0;

function startQuiz() {
    questionNow = 0;
    corvinal = 0;
    grifinoria = 0;
    sonserina = 0;
    lufalufa = 0;
    nextButton.innerHTML = "Proximo";
    showQuestion();
}

function showQuestion() {
    clean(); //para esconder o nome das respostas previas criadas no html
    var currentQuestion = questions[questionNow];
    var questionNo = questionNow + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // para exibir o número da questão atual

    currentQuestion.answers.forEach(answer => { // chama as respostas da questão atual e muda cada resposta:
        var button = document.createElement("button"); // criação de botão
        button.innerHTML = answer.text; // 
        button.classList.add("btn"); // adicionando class 'btn' no botão
        answerButtons.appendChild(button); // anexa um nó (elemento) como o último filho do answerButtons
        if (answer.correct) { // preciso desse if????
            button.dataset.correct = answer.correct; // armazenar no botão answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
}

function clean() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    var selectedBtn = e.target;
    var ravenclaw = selectedBtn.dataset.correct === '1'; //O dataset é uma propriedade HTML que permite armazenar dados personalizados
    var hufflepuff = selectedBtn.dataset.correct === '3';
    var slytherin = selectedBtn.dataset.correct === '2';
    var gryffindor = selectedBtn.dataset.correct === '4';
    if (ravenclaw) {
        selectedBtn.classList.add("rav"); // se a resposta for corvinal adiciona a classe 'rav'
        corvinal++;
    }
    else if (slytherin) {
        selectedBtn.classList.add("sly");
        sonserina++;
    }
    else if (hufflepuff) {
        selectedBtn.classList.add("huf");
        lufalufa++;
    }
    else if (gryffindor) {
        selectedBtn.classList.add("gry");
        grifinoria++;
    }

    Array.from(answerButtons.children).forEach(button => { // para cada botão:
        if (button.dataset.correct === 1) { // busca um botão e adiciona a class xpto
            button.classList.add("xpto");
        }
        button.disabled = true; // desabilita a funcionalidade do botão para não ser clicado novamente
    });
    nextButton.style.display = "block"; // vai mostrar o botão 'próximo'
}

function showScore() {
    clean();
        if(corvinal > sonserina && corvinal > grifinoria && corvinal > lufalufa){
            questionElement.innerHTML = `Orgulho, Ambição e Astucia <br>
            Bem vindo a Sonserina!<br><br>
            "talvez na Sonserina, você fará amigos de verdade. Essas pessoas astutas usam todos os meios para atingir seus objetivos."<br>
            - O Chapéu Sevaror`;
        }
        else if(sonserina > corvinal && sonserina > grifinoria && sonserina > lufalufa){
            questionElement.innerHTML = `Orgulho, Ambição e Astucia <br>
            Bem vindo a Sonserina!<br><br>
            "talvez na Sonserina, você fará amigos de verdade. Essas pessoas astutas usam todos os meios para atingir seus objetivos."<br>
            - O Chapéu Sevaror`;
        }
        else if(grifinoria > corvinal && grifinoria > sonserina && grifinoria > lufalufa){
            questionElement.innerHTML = `Coragem e bravura <br>
            Bem vindo a Grifinória!<br><br>
            "talvez na Sonserina, você fará amigos de verdade. Essas pessoas astutas usam todos os meios para atingir seus objetivos."<br>
            - O Chapéu Sevaror`;
        }
        else if(lufalufa > corvinal && lufalufa > sonserina && lufalufa > grifinoria){
            questionElement.innerHTML = `Orgulho, Ambição e Astucia <br>
            Bem vindo a Sonserina!<br><br>
            "talvez na Sonserina, você fará amigos de verdade. Essas pessoas astutas usam todos os meios para atingir seus objetivos."<br>
            - O Chapéu Sevaror`;
        }
        else{
            questionElement.innerHTML = `O chapéu sevaror ainda está se decidindo, você pode fazer o teste novamente?`;
        }
    nextButton.innerHTML = "Jogar Quiz de conhecimentos";
    nextButton.style.display = "block";
    fetch("/score/scoreQuiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          scoreServer: score,
          idUsuarioServer: idUsuario
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);
    
          if (resposta.ok) {
            console.log(resposta);
    
          } else {
            throw "Houve um erro ao tentar realizar o registro!";
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });
}   

function handleNextButton() {
    questionNow++;
    if (questionNow < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => { //adicionar uma função ao clicar no botão (transformar meu botão 'Proximo')
    if (questionNow < questions.length) {
        handleNextButton();
    }
    else { // o botão chama a função para começar o jogo de novo
        nextButton.href = "quizz.html";
    }
});
startQuiz();