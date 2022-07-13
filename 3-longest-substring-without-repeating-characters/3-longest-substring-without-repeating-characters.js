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





var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let ans = 0;
    let i = 0 ; 
    let j = 0;
    
    while(j <= i && i < s.length) {
        if(!set.has(s[i])){
            set.add(s[i]);
            ans = Math.max(ans , i-j+1);
            i++;
        }
        else{
            if(set.has(s[j])){
                set.delete(s[j]);
                j++;
            }
        }
    }
    return ans
};










