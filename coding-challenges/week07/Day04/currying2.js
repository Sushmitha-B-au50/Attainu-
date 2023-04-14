// Week 7 – Day 4: Coding Challenge
// (Maximum marks - 15)
// AttainU Id: #41
// Q-1) Write a curryfied function for the following function:
// function myFunc(a,b,c)
// {
// return (a+b)/c
// }
// Marks distribution:
// Question 1 carry 15 marks

function curryfied()
{
    function myFunc(a,b,c)
   {
     return (a+b)/c
   }
    return myFunc;
}
console.log(curryfied()(7,2,3));
