const questions = [
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
        { text: "o livro do Príncipe Mestiço", correct: true },
        { text: "Harry Potter", correct: false },
      ]
    },
  ];
  const questionElement = document.getElementById("question"); 
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-button");
  
  let questionNow = 0;
  let score = 0;
  
  function startQuiz() {
    questionNow = 0;
    score = 0;
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
    const isCorrect = selectedBtn.dataset.correct === "true"; //O dataset é uma propriedade HTML que permite armazenar dados personalizados
    if (isCorrect) {
      selectedBtn.classList.add("correct"); // se a resposta for true adiciona a classe 'correct'
      score++;
    } else {
      selectedBtn.classList.add("incorrect") // se não, adiciona a classe 'incorrect'
    }
    Array.from(answerButtons.children).forEach(button => { // para cada botão:
      if (button.dataset.correct === "true") { // busca botão com o dado 'true' e adiciona a class correct
        button.classList.add("correct");
      }
      button.disabled = true; // desabilita a funcionalidade do botão para não ser clicado novamente
    });
    nextButton.style.display = "block"; // vai mostrar o botão 'próximo'
  }
  
  function showScore() {
    resetState();
    questionElement.innerHTML = `Você fez ${score} pontos de ${questions.length}!`;
    nextButton.innerHTML = "Jogar de novo";
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
      startQuiz();
    }
  });
  startQuiz();