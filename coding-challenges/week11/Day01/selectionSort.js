// Week 11 – Day 1: Coding Challenge
// (Maximum marks - 15)
// AttainU Id: #80
// Write a while loop implementation of selection
// sort?
// Marks distribution:
// Question 1 carry 15 marks
let arr =[5,6,1,8,2,9]


function seletionSort(arr)
{
    let i=0;
    let j;
    while(i<arr.length)
    {
      j = i+1;
      while(j<arr.length)
      {
        if (arr[j]<arr[i])  
        {
          [arr[j],arr[i]] = [arr[i],arr[j]]
        }
        j++;
      }
    i++;
    }
return arr;
}

console.log(seletionSort(arr));  //1 2 5 6 8 9