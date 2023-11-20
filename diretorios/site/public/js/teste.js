const questions = [
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
        question: "O aluno Tom Riddle passou a ser conhecido depois como?",
        answers: [
            { text: "Dumbledore", correct: 4 },
            { text: "The chosen one", correct: 3 },
            { text: "Malfoy", correct: 2 },
            { text: "Voldemort", correct: 1 },
        ]
    },
    {
        question: "Qual casa possui a águia em seu brasão?",
        answers: [
            { text: "1", correct: 1 },
            { text: "Grifinória", correct: 2 },
            { text: "Lufa-lufa", correct: 3 },
            { text: "2", correct: 4 },
        ]
    },
    {
        question: "Qual desses feitiços é um feitiço de corte?",
        answers: [
            { text: "Depulso", correct: 4 },
            { text: "Obliviate", correct: 2 },
            { text: "Rosalia", correct: 1 },
            { text: "Diffindo", correct: 3 },
        ]
    },
    {
        question: "Qual item mágico permite que voce visite memórias engarrafadas?",
        answers: [
            { text: "Lembrol", correct: 3 },
            { text: "Penseira", correct: 1 },
            { text: "Espelho de Ojesed", correct: 2 },
            { text: "Desiluminador", correct: 4 },
        ]
    },
    {
        question: "Quem consegue ver um testrálio?",
        answers: [
            { text: "Quem já está no último ano de hogwarts", correct: 4 },
            { text: "Quem já praticou ou foi atingido pelo feitiço 'Revelio'", correct: 2 },
            { text: "Quem já testemunhou a morte", correct: 1 },
            { text: "Quem já morreu", correct: 3 },
        ]
    },
    {
        question: "Qual dos itens abaixo NÃO é uma horcrux?",
        answers: [
            { text: "O Medalhão de Slytherin", correct: 3 },
            { text: "A Cobra Nagini", correct: 1 },
            { text: "o livro do Príncipe Mestiço", correct: 2 },
            { text: "Harry Potter", correct: 4 },
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let questionNow = 0;
let corvinal = 0;
let grifinoria = 0;
let sonserina = 0;
let lufalufa = 0;

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
    resetState(); //para esconder o nome das respostas previas criadas no html
    let currentQuestion = questions[questionNow];
    let questionNo = questionNow + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // para exibir o número da questão atual

    currentQuestion.answers.forEach(answer => { // para cada resposta:
        const button = document.createElement("button"); // criação de botão
        button.innerHTML = answer.text;
        button.classList.add("btn"); // adicionando class 'btn' no botão
        answerButtons.appendChild(button); // anexa um nó (elemento) como o último filho do answerButtons
        if (answer.correct) {
            button.dataset.correct = answer.correct; // armazenar no botão answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const ravenclaw = selectedBtn.dataset.correct === '1'; //O dataset é uma propriedade HTML que permite armazenar dados personalizados
    const hufflepuff = selectedBtn.dataset.correct === '3';
    const slytherin = selectedBtn.dataset.correct === '2';
    const gryffindor = selectedBtn.dataset.correct === '4';
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
    resetState();
        if(corvinal > sonserina && corvinal > grifinoria && corvinal > lufalufa){
            questionElement.innerHTML = `Parabéns! você é da Corvinal!`;
        }
        else if(sonserina > corvinal && sonserina > grifinoria && sonserina > lufalufa){
            questionElement.innerHTML = `Orgulho, Ambição e Astucia <br>
            Bem vindo a Sonserina!<br><br>
            "talvez na Sonserina, você fará amigos de verdade. Essas pessoas astutas usam todos os meios para atingir seus objetivos."<br>
            - O Chapéu Seletor`;
        }
        else if(grifinoria > corvinal && grifinoria > sonserina && grifinoria > lufalufa){
            questionElement.innerHTML = `Parabéns! você é da Grifinória!`;
        }
        else if(lufalufa > corvinal && lufalufa > sonserina && lufalufa > grifinoria){
            questionElement.innerHTML = `Parabéns! você é da Lufa-lufa!`;
        }
        else{
            questionElement.innerHTML = `O chapéu seletor ainda está se decidindo, você pode fazer o teste novamente?`;
        }
    nextButton.innerHTML = "Jogar Quiz de conhecimentos";
    nextButton.style.display = "block";
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
        startQuiz()
    }
});
startQuiz();