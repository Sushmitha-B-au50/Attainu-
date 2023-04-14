// Week 11 – Day 2: Coding Challenge
// (Maximum marks - 15)
// AttainU Id: #84
// https://leetcode.com/problems/squares-of-a-sorted-array/
// Marks distribution: 
// Question 1 carry 15 marks

var sortedSquares = function(nums) {
    for(i=0;i<nums.length;i++)
        {
            nums[i] = nums[i]*nums[i];
        }
  return seletionSort(nums);
};

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


console.log(sortedSquares([-7,-3,2,3,11]))