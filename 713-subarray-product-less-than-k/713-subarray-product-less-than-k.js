/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(arr, target) {
if(target <= 1) return 0
  if(arr.length == 0) return 0
  if(arr.length == 1) return arr[0] < target ? 1 : 0;

  let start = 0,
      end   = 0,
      result= 0;


  let cummulitaveProduct = 1;
  for(end ; end < arr.length ; end++){
    cummulitaveProduct *= arr[end];
      
    while(cummulitaveProduct >= target){
      cummulitaveProduct /= arr[start];
      start++;
    }
      result += end -start +1;
    
  }
 
  return result;
}