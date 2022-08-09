/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, arr) {
  let sum = 0 ; 
  let min_len = Number.POSITIVE_INFINITY;
  let window_beginning = 0;

  for(let window_end = 0 ; window_end < arr.length ; window_end++){
    sum += arr[window_end];

    while(sum >= s){
      min_len = Math.min(min_len , (window_end - window_beginning));
      sum -= arr[window_beginning];
      window_beginning++
    }
  }
  return min_len+1 == Number.POSITIVE_INFINITY ? 0 : min_len+1;
};