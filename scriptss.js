//questoes
const questions =[
    {
        question: "Qual foi o campeão do SuperBowl 42?",
        choices: ["Falcons","Steelers","Giants","Patriots"],
        answer: "Giants",
    },

    {
        question: "Em que ano foi lançado o disco Souvlaki da banda Slowdive?",
        choices: ["1992","1993","1985","1986"],
        answer: "1993",
    },
    {
        question: "Qual ano de lançamento do filme O SENHOR DOS ANÉIS?",
        choices: ["2000","2001","2002","2003"],
        answer: "2001",
    },

    {
        question: "Qual o nome do namorado da Elaine em Seinfeld?",
        choices: ["Purdy","Peterman","Devola","OJ"],
        answer: "Purdy",
    },

    {
        question: "Primeiro disco do Nirvana?",
        choices: ["Incesticide","LoveBuzz","In the Utero","Bleach"],
        answer: "Bleach",
    },

    {
        question: "Linguagem ultilizada em data science?",
        choices: ["GO","PYTHON","HTML","COBOL"],
        answer: "PYTHON",
    },

    {
        question: "Ano de lançamento de Power Rangers Mighty Morphin?",
        choices: ["1990","1991","1992","1993"],
        answer: "1991",
    },

    {
        question: "Qual mês foi realizado Woodstock?",
        choices: ["Agosto","Setembro","Outubro","Novembro"],
        answer: "Agosto",
    },

    

];


const questionElement=document.getElementById("question");
const choiceElements=Array.from(document.getElementsByClassName("choice"));
const nextButton=document.getElementById("next");
const scoreElement=document.getElementById("score");
const errorElement=document.getElementById("error");

//vars globais
let curentQuestion=0;
let score =0;
let error =0;
let answerChosen= false;

//func
function loadQuestion(){
    const currentQuestionData= questions[curentQuestion];
    questionElement.innerText=currentQuestionData.question;

    const choices=shuffleArray(currentQuestionData.choices);
    for(let i=0;i<choiceElements.length;i++){
        choiceElements[i].innerText=choices[i];
    }
    answerChosen=false;
}

function shuffleArray(array){
    let currentIndex= array.length,temporaryValue,randomIndex;

    while(0 != currentIndex){
        randomIndex= Math.floor(Math.random() * currentIndex);
        currentIndex-=1;
        temporaryValue= array[currentIndex];
        array[currentIndex]= array[randomIndex];
        array[randomIndex]= temporaryValue;
    }
    return array;
}

function checkAnswer(e){
    if(answerChosen) return;
    answerChosen=true;

    if(e.target.innerText===questions[curentQuestion].answer){
        score++;
        scoreElement.innerText= "Acerto: "+score;
        alert("You got that right!!");
    }else{
        error++;
        errorElement.innerText= "Erro: "+error;
        alert("You got that wrong!! Right answer is: "+
         questions[curentQuestion].answer+" !!");
    }
}

choiceElements.forEach((element)=>{
    element.addEventListener("click",checkAnswer);
});

function restartQuiz(){
    curentQuestion=0;
    score=0;
    error=0;
    scoreElement.innerText= "Pontuação: 0";
    errorElement.innerText= "Pontuação: 0";
    loadQuestion();
};

nextButton.addEventListener("click",()=>{
    if(!answerChosen){
        alert("Escolha uma alternativa para seguir.")
        return;
    }
    curentQuestion++;
    if(curentQuestion< questions.length){
        loadQuestion();
    }else{
        alert("FIM DE JOGO!!Você acertou "
        +score+" de "
        +questions.length+" questões.");
        restartQuiz();
    }
});

loadQuestion();