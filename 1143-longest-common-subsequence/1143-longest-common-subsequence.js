/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

var longestCommonSubsequence = function(text1, text2){
  
    function helper(i1 , i2 , memo){ 
        if(i1 == text1.length || i2 == text2.length) return 0;
        
        let key = i1+','+i2;
        if(key in memo) return memo[key];
        
        if(text1[i1] == text2[i2]) return memo[key] = helper(i1+1 , i2+1 , memo) + 1;
        else return memo[key] = Math.max(helper(i1+1 , i2 , memo) , helper(i1 , i2+1 , memo))
    }
    
     return helper(0 , 0 , memo = {});
};
    