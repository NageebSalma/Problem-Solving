/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
let duplicateNumbers = [];
  // TODO: Write your code here
  let i = 0 ; 
//arr[i] is at i-1
  while(i  < nums.length){
    let j = nums[i]-1;
    if(nums[i] !== nums[j]){
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
    else i++;
  }
  // console.log(nums)

  for(let i = 0 ; i < nums.length ; i++){
    if(nums[i] !== i+1) duplicateNumbers.push(nums[i]);
  }
  return duplicateNumbers;
};