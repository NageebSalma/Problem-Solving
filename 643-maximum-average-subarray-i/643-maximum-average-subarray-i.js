/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//[1,12,-5,-6,50,3], k = 4
//___________
//sum = 1 + 12 + -5 + -6

var findMaxAverage = function(nums, k) {
    // let tracker = [];
    let output = Number.NEGATIVE_INFINITY;
    let sum = 0;
    let windowStart= 0;
    
    for(let  windowEnd = 0; windowEnd < nums.length; windowEnd++){
        sum += nums[windowEnd]
        if(windowEnd >= k-1){
            // tracker.push(sum/k);
            output = Math.max(output , sum/k)

            sum = sum - nums[windowStart];
            windowStart++;
        }
    }
    // console.log(tracker);
    return output;
};