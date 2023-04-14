// (Maximum marks - 15)
// Attainuid:#25
// Q-1) Write a function to take input from the user and feed it into an array.
// Take input (in this question only) from the user for length of the array also.

const prompt = require('prompt-sync')();

let createArray = () =>
{ 
   NewArray = [];
   var Number = parseInt(prompt("Enter a length of Array:"));
   console.log("please give the " + Number + " Elements Of Array");
   for(i=0; i<Number; i++)
   {
      NewArray.push(prompt("Enter a number " + (i+1) +" : "  ));    
   }
   return  NewArray;
}

console.log(createArray());