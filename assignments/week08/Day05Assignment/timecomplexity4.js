// Week 8 – Day 5: Assignment
// (Maximum marks - 15)
// AttainU Id: #46
// Q - 1 )Below are nested “K” for loops (3 marks)
// n= Number(prompt(“Enter the limit”))
// for(let i=0;i<n;i++)
// for(let j=0;j<n;i++)
// for(let m=0;m<n;i++)
// …
// …
// …
// K loops in total
// …
// for(let z=0;z<n;i++)
// console.log(“Hello World”);
// Q-2)
// N= Number(prompt(“Enter the limit”))
// M= Number(prompt(“Enter the limit”))
// a = b = 0
// for(let i=0;i<N;i++){
// a = a + 1
// }
// for(let j=0;j<M;j++)
// b = b + 1
// Q - 3 )
// n= Number(prompt(“Enter the limit”))
// i = 1
// while(i^2<=n)
// {console.log(“Time complexity”)
// i += 1}
// Marks distribution:
// Question 1 carry 15 marks




// Q - 1 )Below are nested “K” for loops (3 marks)
// n= Number(prompt(“Enter the limit”))
// for(let i=0;i<n;i++) o(n)
// for(let j=0;j<n;i++) o(n)
// for(let m=0;m<n;i++) o(n)
// …
// …
// …
// K loops in total  o(n)(o(n)) .... upto k loops 
// …
// for(let z=0;z<n;i++) //o(n)
// console.log(“Hello World”);


// time complexity - o(n^4+k) n to power of 4+k 


//  if k is 2 then that is two inner loops are present then time comp is o(n*n*n*n*n*n) o(n^6);
//  there is already  4 outer loops are present o(n^4) depends upon the k the n ^k will be added to o(n^4)


// Q-2)
// N= Number(prompt(“Enter the limit”)) o(1)
// M= Number(prompt(“Enter the limit”)) o(1)
// a = b = 0  o(1)
// for(let i=0;i<N;i++){   //o(N)
// a = a + 1      
// }
// for(let j=0;j<M;j++) //o(M)
// b = b + 1

// since the outer for loop ends and new for loop starts  adding both - the time compl is  O(N+M)


// Q - 3 )
// n= Number(prompt(“Enter the limit”))
// i = 1;
// while(i^2<=n)
// {console.log("Time complexity”");
// i += 1;}


// time complexity is √n each and every item i value is mulpited by i  (i^2) = i*i;
// if n = 9 then the loop runs fr 3 times  

// i =1 1 <=9
// i=2  4<=9
// i=3  9<=9
// which give the pattern √9 = 3 (√n)



// / / /####################################################
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