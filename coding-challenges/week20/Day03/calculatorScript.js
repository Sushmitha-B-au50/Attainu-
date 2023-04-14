
const firstNumber  = document.getElementById('Number1');
const secondNumber = document.getElementById('Number2');
const sum = document.getElementById('btnSum');
debugger;
const result = document.getElementById('total');

sum.addEventListener('click',calculateSum);

function calculateSum()
{
    let  num1 = Number(firstNumber.value);
    let  num2 = Number(secondNumber.value);
    result.innerHTML = num1 + num2;
    console.log(result);
}