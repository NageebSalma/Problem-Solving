/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let numOfTrialsToFindNum = 0;
  let i = 0;

  while(i < nums.length){
    let j = nums[i];
    if(nums[i] !== nums[j] && j < nums.length){
      let temp = nums[i];
      nums[i]  = nums[j];
      nums[j]  =temp;
    }
    else{i++;}
  }

  for(let i  = 0 ; i < nums.length ; i++){
    if(nums[i] !== i) return i;
  }
  return nums.length;
};