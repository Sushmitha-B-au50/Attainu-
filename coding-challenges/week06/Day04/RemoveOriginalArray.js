// Week 6 – Day 4: Coding Challenge
// (Maximum marks - 15)
// AttainU Id: #36
// Q-1) Take an integer array(length >10) as input from the user, and extract numbers from index 2, 7
// numbers into a new array, using the inbuilt function.
// Elements should be removed from the original array.
// Input -> Arr = [4,8,1,4,2,9,10,7,3,6,5]
// Output -> NewArr = [1,4,2,9,10,7,3]
// Arr = [4,8,6,5]
// Marks distribution:
// Question 1 carry 15 marks

const prompt = require('prompt-sync')();

let createArray = () =>
{ 
   NewArr = [];
   Arr=[];   
   var Input = parseInt(prompt("Enter a length of Array greater than 10: ")); // getting the length of array from user to interate
   if(Input>10)
   {
      console.log("please give the " + Input + " Elements Of Array");
      for(i=0; i<Input; i++)
      {
         Arr.push(prompt("Enter a number " +((i+1)) +" : "  ));   
      }
      Arr = Arr.map(Number);  
      NewArr=Arr.splice(2,7); // remove from index 2 to 7 
      console.log(NewArr);
      console.log(Arr);
   }
   else
   {
      console.log("please give the  Elements Of Array greater than 10");
   }
}
   
createArray();


/// / /####################################################
//#####################################################
//################################################
//###############################################
//###############################################
//##############################################
//********************************************************
// *************************************
//  */***********************************
// *******************************************
// ******************** */
//####################################################
//#####################################################
//################################################
//###############################################
//###############################################
//##############################################
//********************************************************
// *************************************
//  */***********************************
// *******************************************
// ******************** */

//####################################################
//#####################################################
//################################################
//###############################################
//###############################################
//##############################################
//********************************************************
// *************************************
//  */***********************************
// *******************************************
// ******************** */

//####################################################
//#####################################################
//################################################
//###############################################
//###############################################
//##############################################
//********************************************************
// *************************************
//  */***********************************
// *******************************************
// ******************** */
//####################################################
//#####################################################
//################################################
//###############################################
//###############################################
//##############################################
//********************************************************
// *************************************
//  */***********************************
// *******************************************
// ******************** */
//********************************************************
// *************************************
//  */***********************************
// *******************************************
// ******************** */
//********************************************************
// *************************************
//  */***********************************
// *******************************************
// ******************** */