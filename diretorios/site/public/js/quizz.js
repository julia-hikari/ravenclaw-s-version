
// criação de array questions: Cada objeto tem duas propriedades: 'question', que é o texto da pergunta, e 'answers', que é um array de objetos que representam as respostas. Cada objeto de resposta tem duas propriedades: text, que é o texto da resposta, e correct, que é um valor booleano que indica se a resposta é correta ou não
//  Uma propriedade booleana pode ser usada para armazenar um estado, uma condição ou uma preferência de um objeto
var questions = [
  {
    question: "Qual poção costuma ser chamada de 'Sorte Líquida'?",
    answers: [
      { text: "Felix Felicis", correct: true },
      { text: "Poção Wiggenweld", correct: false },
      { text: "Fadicida", correct: false },
      { text: "Veritaserum", correct: false },
    ]
  },
  {
    question: "Qual feitiço é usado contra um dementador?",
    answers: [
      { text: "Alohomora", correct: false },
      { text: "Arresto Momentum", correct: false },
      { text: "Expecto Patronum", correct: true },
      { text: "Bombarda", correct: false },
    ]
  },
  {
    question: "Quem foi o professor de defesa contra a arte das trevas no primeiro ano de Harry em Hogwarts?",
    answers: [
      { text: "Severus Snape", correct: false },
      { text: "Quirino Quirrell", correct: true },
      { text: "Gilderoy Lockhart", correct: false },
      { text: "Remo Lupin", correct: false },
    ]
  },
  {
    question: "O feitiço Expelliarmus serve para:",
    answers: [
      { text: "Congelar", correct: false },
      { text: "Petrificar", correct: false },
      { text: "Paralizar", correct: false },
      { text: "Desarmar", correct: true },
    ]
  },
  {
    question: "O aluno Tom Riddle passou a ser conhecido depois como?",
    answers: [
      { text: "Dumbledore", correct: false },
      { text: "The chosen one", correct: false },
      { text: "Malfoy", correct: false },
      { text: "Voldemort", correct: true },
    ]
  },
  {
    question: "Qual casa possui a águia em seu brasão?",
    answers: [
      { text: "Corvinal", correct: true },
      { text: "Grifinória", correct: false },
      { text: "Lufa-lufa", correct: false },
      { text: "Sonserina", correct: false },
    ]
  },
  {
    question: "Qual desses feitiços é um feitiço de corte?",
    answers: [
      { text: "Depulso", correct: false },
      { text: "Obliviate", correct: false },
      { text: "Rosalia", correct: false },
      { text: "Diffindo", correct: true },
    ]
  },
  {
    question: "Qual item mágico permite que voce visite memórias engarrafadas?",
    answers: [
      { text: "Lembrol", correct: false },
      { text: "Penseira", correct: true },
      { text: "Espelho de Ojesed", correct: false },
      { text: "Desiluminador", correct: false },
    ]
  },
  {
    question: "Quem consegue ver um testrálio?",
    answers: [
      { text: "Quem já está no último ano de hogwarts", correct: false },
      { text: "Quem já praticou ou foi atingido pelo feitiço 'Revelio'", correct: false },
      { text: "Quem já testemunhou a morte", correct: true },
      { text: "Quem já morreu", correct: false },
    ]
  },
  {
    question: "Qual dos itens abaixo NÃO é uma horcrux?",
    answers: [
      { text: "O Medalhão de Slytherin", correct: false },
      { text: "A Cobra Nagini", correct: false },
      { text: "O livro do Príncipe Mestiço", correct: true },
      { text: "Harry Potter", correct: false },
    ]
  },
];
// retorna um elemento com um valor especificado assim que uma função for chamada, é usado quase sempre que você deseja ler ou editar um elemento HTML
var questionInner = document.getElementById("question");
var answerButtons = document.getElementById("answerButtons");
var nextButton = document.getElementById("nextButton");
var questionNow = 0;
var score = 0;
var idUsuario = sessionStorage.ID_USUARIO;

// zerar pontuação e posição da lista
function startQuiz() {
  questionNow = 0;
  score = 0;
  nextButton.innerHTML = "Proximo";
  showQuestion();
}
// objeto é uma entidade independente, com propriedades e tipos
function showQuestion() {
  clean(); //para esconder o nome das respostas previas criadas no html
  var currentQuestion = questions[questionNow];
  var questionN = questionNow + 1;
  questionInner.innerHTML = questionN + ". " + currentQuestion.question; // para exibir o número da questão atual

  currentQuestion.answers.forEach(answer => { // usando o forEach para percorrer por cada resposta da questão atual. Guardando duas propriedades para cada resposta.
    var button = document.createElement("button"); // criação de botão
    button.innerHTML = answer.text;
    button.classList.add("btn"); // adicionando class 'btn' no botão
    answerButtons.appendChild(button); // anexa o 'button' como o último filho do answerButtons
    if (answer.correct) { // verifica se a propriedade 'correct' do 'answer' é verdadeira
      button.dataset.correct = answer.correct; // atribui o valor de answer.correct à propriedade correct do objeto dataset do button
    }
    button.addEventListener("click", selectAnswer); // 'addEventListener' adiciona um evento de click ao botão. Esse evento é usado para executar uma função chamada selectAnswer quando o usuário clicar no botão.
  });
}

function clean() { //  verifica se o elemento answerButtons tem algum filho
  nextButton.style.display = "none"; // esconde o botão next
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild); //  remove o primeiro filho do elemento answerButtons
  }
}

// na função selectAnswer, adicionei o parâmetro 'event', que é um objeto que representa o evento de clique no botão de resposta 
function selectAnswer(e) {
  var selectedBtn = e.target; // criando var selectedBtn e atribuindo a ela a propriedade 'e.target'. o event.target representa um elemento HTML que causou um evento
  // A propriedade 'target' retorna o elemento onde ocorreu o evento
  var isCorrect = selectedBtn.dataset.correct === "true"; //O dataset é uma propriedade HTML que permite armazenar dados personalizados dentro do elemento HTML 
  if (isCorrect) {
    selectedBtn.classList.add("correct"); // se a resposta for true adiciona a classe 'correct'
    score += 1;
  }
  else {
    selectedBtn.classList.add("incorrect") // se não, adiciona a classe 'incorrect'
  }

  // método 'forEach' para percorrer o array e executar uma função anônima que recebe um parâmetro chamado button, que é o elemento do botão atual
  Array.from(answerButtons.children).forEach(button => { // função 'Array.from' para converter a propriedade 'children' do elemento 'answerButtons' em um array. O children contém todos os elementos HTML que são filhos do elemento answerButtons, ou seja, todos os botões de resposta
    if (button.dataset.correct === "true") { // busca botão com o dado 'true' e adiciona a class correct
      button.classList.add("correct");
    }
    button.disabled = true; // desabilita a funcionalidade do botão para não ser clicado novamente
  });
  nextButton.style.display = "block"; // atribui o valor "block" para mostrar o botão 'próximo'
}

function showScore() {
  clean();
  questionInner.innerHTML = `Você fez ${score} pontos de ${questions.length}!`;
  nextButton.innerHTML = "Jogar de novo";
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
  }
  else {
    showScore();
  }
}
nextButton.addEventListener("click", () => { //adicionar uma função ao clicar no botão (transformar meu botão 'Proximo')
  if (questionNow < questions.length) {
    handleNextButton();
  }
  else { // o botão chama a função para começar o jogo de novo
    startQuiz();
  }
});
startQuiz();