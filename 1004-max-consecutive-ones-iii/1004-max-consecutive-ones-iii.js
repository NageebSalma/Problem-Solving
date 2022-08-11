/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(str, k) {
    let tracker = {1: 0 , 0 : 0},
      max_len = 0,
      window_start = 0,
      window_end = 0,
      max_ones = 0;

  for(window_end ; window_end < str.length ; window_end++){
    tracker[str[window_end]] ? tracker[str[window_end]]++ :  tracker[str[window_end]] = 1;

    while(window_end - window_start + 1 - tracker[1] > k){
      tracker[str[window_start]]--;
      if(tracker[str[window_start]] <= 0)tracker[str[window_start]] = 0
      window_start++;
    }

    max_len = Math.max(max_len , window_end - window_start + 1)
  }

  return max_len;
};