/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let i = 0;
  let n = nums.length;
  while(i < n){
    let j = nums[i] - 1;

    if(nums[i] <= n && nums[i] !== nums[j]){
      //swap;
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }

    else i++;
  }

  for(let i = 0 ; i < n ;i++){
    if(nums[i] !== i+1) return i+1;
  }
  return n+1;
};