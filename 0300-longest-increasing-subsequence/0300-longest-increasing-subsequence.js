/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length == 1) return 1;
    
    let LIS_per_subproblem = new Array(nums.length).fill(1);
    let answer = 1;
    
    let i = 0, j = 1;
    for(j ; j < nums.length ; j++){
        while(i < j){
            if(nums[j] > nums[i]) LIS_per_subproblem[j] = Math.max(LIS_per_subproblem[j] , LIS_per_subproblem[i] + 1);
            i++;
        };
        answer = Math.max(answer , LIS_per_subproblem[j]);
        i = 0;
    };
    
    // console.log(LIS_per_subproblem)
    return answer;
};