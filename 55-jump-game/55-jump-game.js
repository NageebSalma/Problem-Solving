/**
 * @param {number[]} nums
 * @return {boolean}
 */

// [2,3,1,1,4]
//  - .
// //consider dashed index to be currentAbility
// return currentAbility === 0 ? true : false
//     //i move down the array and see if each step gets me to the step after it


var canJump = function(nums) {
    if(nums.length==1) return true
    let currentAbility= nums.length-2
    let step = nums.length-1
    for(let i = nums.length-2 ; i >= 0 ; i--){
        currentAbility = i
        
        if(nums[currentAbility] >= step - currentAbility){
            step = currentAbility
        }
       
    }
    return nums[currentAbility] >= step-currentAbility
};

