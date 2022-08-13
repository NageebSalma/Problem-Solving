/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target_sum) {
  let start = 0;
  let end = arr.length-1;
    
  while(start < end){
    if(arr[start]+arr[end] == target_sum) return[start+1,end+1];
    else if(arr[start] + arr[end] > target_sum) end--;
    else start++;
  }
  return [-1, -1];
};
