// Week 8 – Day 4: Coding Challenge
// (Maximum marks - 15)
// AttainU Id: #48
// What will be the Time Complexity of these code snippet?
// Q - 1)
// n= Number(prompt(“Enter the limit”))
// i = 1
// while(i^2<=n) {
// console.log(“Time complexity”)
// i += 1
// }
// Q-2)
// n= Number(prompt(“Enter the limit”))
// for(let i = 0;i<n;i++){
// for(let j = 0;j<i;j++){
// for(let k = 0;k<100;k++) {
// console.log(“Time complexity”)
// }
// }
// }
// Marks distribution:
// Question 1 carry 15 marks


// Q - 1)
// n= Number(prompt(“Enter the limit”))
// i = 1
// while(i^2<=n) {
// console.log(“Time complexity”)
// i += 1
// }

// time complexity is √n each and every item i value is mulpited by i  (i^2) = i*i;
// if n = 9 then the loop runs fr 3 times  

// i =1 1 <=9
// i=2  4<=9
// i=3  9<=9
// which give the pattern √9 = 3 (√n)





// Q-2)
// n= Number(prompt(“Enter the limit”))
// for(let i = 0;i<n;i++){ //o(n)
// for(let j = 0;j<i;j++){ //o(n)
// for(let k = 0;k<100;k++) { //o(1)
// console.log(“Time complexity”)
// }
// }
// }


// time complexity of this prblm is  O(n^2)  frst loop will run upto n times ,in secondloop j will run upto n j<i so n *n is n^2
// third loop it will be constant O(1) elimitaing the constant