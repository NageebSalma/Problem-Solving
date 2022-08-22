/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
   let i = 0;
    
    while( i  < nums.length){
        let j = nums[i] - 1;
        
        if(nums[i] !== nums[j]){
            let temp = nums[i];
            nums[i]  = nums[j];
            nums[j]  = temp;
        }
        else i++;
    }
    
    let missingNums = [];
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] !== i+1) missingNums.push(i+1);
    }
    
    return missingNums;
};