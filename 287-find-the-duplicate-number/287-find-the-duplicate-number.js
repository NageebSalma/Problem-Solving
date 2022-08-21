/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let i = 0 ; 

  while(i  < nums.length){
    if(nums[i] !== i+1){
      if(nums[i] == nums[nums[i]-1]) return nums[i];
      else{
        let temp = nums[i];
        nums[i] = nums[nums[i] - 1];
        nums[temp - 1] = temp;
      }
    }
    else i++;
  }
  return -1;
    
};