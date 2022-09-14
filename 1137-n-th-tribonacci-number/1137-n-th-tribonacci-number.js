/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n , memo = {0 : 0 , 1: 1 , 2 : 1}) {
    if(n in memo) return memo[n];
    
    return memo[n] = tribonacci(n - 1  , memo) + tribonacci(n - 2  , memo) + tribonacci(n - 3  , memo);
};