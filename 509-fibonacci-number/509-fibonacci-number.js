/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n , memo = {0 : 0 , 1 : 1 , 2 : 1}) {
    if(n in memo) return memo[n];
    // if(n <= 2) return 1;
    
    return memo[n] = fib(n-1 , memo) + fib(n-2 , memo);
};