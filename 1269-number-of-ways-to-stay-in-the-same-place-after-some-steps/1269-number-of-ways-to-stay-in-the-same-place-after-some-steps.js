/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
     if(steps < 2) return 1;
         
     const initialLen = arrLen-1;
    
    
    //recursive function
     const helper = (steps , arrLen , memo) => {
    
     const key = steps +','+ arrLen;
     if(key in memo) return memo[key];
         
     if(arrLen > initialLen || arrLen < 0) return 0;
     if(steps === 0) return arrLen == initialLen ? 1 : 0;
    
        
     let stay  = helper(steps - 1, arrLen ,   memo);
     let left  = helper(steps - 1, arrLen+1 , memo);
     let right = helper(steps - 1, arrLen-1 , memo);
     
     return memo[key] = (stay + left + right) % (10 ** 9 + 7);
    };
    
    
    return helper(steps, arrLen-1 , memo = {});
};


