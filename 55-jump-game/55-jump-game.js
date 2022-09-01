/**
 * @param {number[]} nums
 * @return {boolean}
 */


var canJump = function(nums) {
    if(nums.length <= 1) return true;
    
    let end_goal = nums.length-1;
    let positionToJumpFrom = nums.length-2;
    
    for(positionToJumpFrom ; positionToJumpFrom >= 0 ;  positionToJumpFrom--){
        if(positionToJumpFrom + nums[positionToJumpFrom] >= end_goal) end_goal = positionToJumpFrom;
    }
    
    // console.log(positionToJumpFrom , end_goal)
    return end_goal == 0;
};


//[2 , 3 , 1 ,1 , 4]
//            EG

//positionToJumpFrom + nums[positionToJumpFrom] >= EG then I update EG , else, do nothing
//EG = nums.length-1; => 4
