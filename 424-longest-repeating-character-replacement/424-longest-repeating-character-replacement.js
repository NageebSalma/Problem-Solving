/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(str, k) {
   let distinct = {},
      window_start = 0,
      window_end = 0,
      max_len = Number.NEGATIVE_INFINITY,
      repeating_chars_len = 0;

  for(window_end ; window_end < str.length ; window_end++){
    if(!distinct[str[window_end]]) distinct[str[window_end]] = 0;
    distinct[str[window_end]] += 1;

    repeating_chars_len = Math.max(repeating_chars_len ,  distinct[str[window_end]]);
    //here we shrink the window:
    while(window_end - window_start + 1 - repeating_chars_len > k){
      distinct[str[window_start]]--;
      if(distinct[str[window_start]] == 0) delete distinct[str[window_start]];
      window_start++;
    }
    max_len = Math.max(max_len , window_end-window_start+1);
  }

  return max_len == Number.NEGATIVE_INFINITY ? 0 : max_len;
};