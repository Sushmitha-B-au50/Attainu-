// Week 9 – Day 2: Coding Challenge
// (Maximum marks - 15)
// AttainU Id: #57
// Q-1 )Binary Search https://leetcode.com/problems/binary-search/


var search = function(nums, target) {
    let l=0;
    let r = nums.length-1;
    let mid;
    while(l<=r)
        {
             mid = Math.floor((l+r)/2);
            if(target>nums[mid])
                {
                    l = mid+1;
                }
            else if(target<nums[mid])
                {
                    r =mid-1;
                }
            else
                {
                    return mid;
                }
        }
    return -1;
};

arr = [1,2,3,5,6];
target = 6;
console.log(search(arr, target));


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