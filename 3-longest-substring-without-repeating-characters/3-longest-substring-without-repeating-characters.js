/**
 * @param {string} s
 * @return {number}
 */


// p w w k e w
//     i
//       j

// sub        | unique? | max_ans
// p            yes        1
// pw           yes        2
// pww          no         2
// w            yes        2
// ww           no         2
// w            yes        2
// wk           yes        2
// wke          yes        3
// wkew         no         3



//brute force
// let isUnique = (str) => {
//     var hashtable = {};
//     for(var i=0,len=str.length;i<len;i++){
//         if (hashtable[str[i]] != null){
//             hashtable[str[i]] = 1;
//             return false;
//         }else{
//             hashtable[str[i]] = 0;
//         }
//     }
//     return true;

// }
// var lengthOfLongestSubstring = function(s) {
//     let substring = ''
//     let ans = 0;
//     for(let i = 0  ; i < s.length ; i++){
//        for(let j  = 0 ; j < s.length ; j++){
//             substring = s.substring(i , j+1)
//             if(isUnique(substring)){
//                 ans = Math.max(ans , substring.length)
//             }
//           }
//     }
//     return ans;
// };





var lengthOfLongestSubstring = function(str) {
 let distinctMap = {};
  let window_start = 0 ;
  let window_end = 0;
  let max_len = Number.NEGATIVE_INFINITY;

  for(window_end ; window_end < str.length ; window_end++){
    if(!distinctMap[str[window_end]]) distinctMap[str[window_end]] = 0;
    distinctMap[str[window_end]] += 1;
    // console.log(distinctMap)
    while(distinctMap[str[window_end]] > 1){
      distinctMap[str[window_start]] -= 1;
      // console.log(distinctMap)
      if(distinctMap[str[window_start]] == 0) delete distinctMap[str[window_start]];
      window_start++;
    }

    max_len = Math.max(max_len , window_end-window_start+1);
  }

  return max_len == Number.NEGATIVE_INFINITY ? 0 : max_len;
};










