// ID: 31 
 
// Write a function to create an object, that calculates the 
// number of times each element occurs in the following array. 
// (5 marks) (Easy) 
// Input: 
// [“Orange”,“Orange”,”banana”,”apple”,”apple”,”banana”,”apple”,”apple”,” 
// apple”,”apple”,“Orange”,“Orange”,“Orange”,“Orange”,”banana”] 
// Output: 
 
// { 
// Orange:6 
// apple:5 
// banana:3 
// }

let arr = ['Orange','Orange','banana','apple','apple','banana','apple','apple',
'apple','apple','Orange','Orange','Orange','Orange','banana'];

let createobj = (arr) =>
{
fruitObj ={};            //created empty object
   for(i=0;i<arr.length;i++)
   {  
         let count = 1;
         if((fruitObj.hasOwnProperty(arr[i])))  //checking if arr[i] that is the element is already in  obj 
         {
            
            fruitObj[arr[i]]++;  
         }
         else                                  //here if not then adding the value(count as 1) for thar property 
         {
            fruitObj[arr[i]] = count;

         }
   }
   return fruitObj;
}
console.log(createobj(arr))
