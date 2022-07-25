/**
 * @param {number[]} nums
 * @return {number}
 */



var maxSubArray = function(nums) {
    let result = Number.NEGATIVE_INFINITY;
    let sum = 0 ; 
    for(let num of nums){
        sum += num;
        result = Math.max(result , sum);
        sum = (sum < 0 ? 0 : sum)
    }
    return result;
};