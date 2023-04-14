
// Week 13 – Day 5: Coding Challenge
// (Maximum marks - 15)
// AttainU Id: #96
// https://leetcode.com/problems/next-greater-element-i/
// Marks distribution:
// Question 1 carry 15 marks

var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    for(i=0;i<nums1.length;i++)
        {
           let isFound=false;
           let index= nums2.indexOf(nums1[i]) +1;
            while(index<nums2.length)
            {
                if(nums2[index]>nums1[i])
                {
                    ans.push(nums2[index]);
                    isFound = true;
                    break;
                } 
                index++;
            } 
            if(!isFound) ans.push(-1)             
        }
    return ans;  
};

console.log(nextGreaterElement([4,1,2],[1,3,4,2]));

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



