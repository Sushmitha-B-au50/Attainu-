// Week 12 – Day 2: Coding Challenge
// (Maximum marks - 15)
// AttainU Id: #91
// https://leetcode.com/problems/find-the-duplicate-number/
// Marks distribution: 
// Question 1 carry 15 marks

var findDuplicate = function(nums) {
    NewObj = {};
    let res = 0;
    for(i=0;i<nums.length;i++)
    {  
          let count = 1;
          if(NewObj[nums[i]])
          { 
             return nums[i];  
          }
          else                               
          {
             NewObj[nums[i]] = count;
          }
    }  
};

console.log(findDuplicate([3,1,3,4,2])); // 3 is the repeated number