const displayQuiz =document.getElementById('quiz');
const option1 =document.getElementById('option-1');
const option2 =document.getElementById('option-2');
const option3 =document.getElementById('option-3');
const option4 =document.getElementById('option-4');
const next = document.getElementById('btnNext');
const prev = document.getElementById('btnPrev');
next.addEventListener('click',getnextQuiz);
prev.addEventListener('click',getprevQuiz);
const quizSection = document.getElementById('content'); 
const opt1 =document.getElementById('flexRadioDefault1');
const opt2 =document.getElementById('flexRadioDefault2');
const opt3 =document.getElementById('flexRadioDefault3');
const opt4 =document.getElementById('flexRadioDefault4');

const checkbox = document.querySelector("input[type=checkbox]");



var data;
async function getQuiz()
{

  let promise =  fetch('https://opentdb.com/api.php?amount=5&category=10&difficulty=easy&type=multiple');
  let response = await promise;
   data = await response.json();

}
getQuiz();
let i =0;
let j;
let crtAns =0;
function getnextQuiz ()  {
  if(i<data.results.length)
  {
  
    displayQuiz.innerText = data.results[i].question;
    option1.innerHTML = data.results[i].incorrect_answers[0];
    option2.innerHTML = data.results[i].incorrect_answers[1];
    option3.innerHTML = data.results[i].incorrect_answers[2];
    option4.innerHTML = data.results[i].correct_answer;
  j = i-1;
  i +=1;
  }
  else{
    displayQuiz.innerText =  "you have  correctly answered " + crtAns  ;

    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    return;
  }

  if(opt4.checked === true)
  {
   crtAns +=1;
  }

} 



function getprevQuiz()
{
  if(j>=0 && j<data.results.length)
  {
    displayQuiz.innerText = data.results[j].question;
    option1.innerHTML = data.results[j].incorrect_answers[0];
    option2.innerHTML = data.results[j].incorrect_answers[1];
    option3.innerHTML = data.results[j].incorrect_answers[2];
    option4.innerHTML = data.results[j].correct_answer;
  }
  i=i-1;
} 


