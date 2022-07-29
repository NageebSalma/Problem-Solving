/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0 ;
    let j = 0;
    
    while(j<=i && i < nums.length){
        if(nums[i] !== 0){
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp;
            i++
            j++
        }
        else{
            i++;
        }
    }
    return nums
};