/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let output = Number.NEGATIVE_INFINITY;
    let sum = 0;
    
    for(let i = 0 ; i < nums.length-k+1 ; i++){
        for(let j = i ; j < k+i ; j++){
            sum += nums[j];
        }
        output = Math.max(sum/k , output)
        sum = 0;
    }
    
    return output;
};