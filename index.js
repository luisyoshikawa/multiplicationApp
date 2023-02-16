const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input") 

const formEl = document.getElementById("form");

let score = JSON.parse(localStorage.getItem("score"));

const scoreEi = document.getElementById("score"); 

if(score<0){
    score = 0;
}

questionEl.innerHTML = `Quanto é ${num1} multiplicado por ${num2}?`;

scoreEi.innerText = `score: ${score}`

const correctAn = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if(userAns === correctAn){
        score++;
        updateLocalStorage();
    } else{
        score--;
        updateLocalStorage();
    }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}