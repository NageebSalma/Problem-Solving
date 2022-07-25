/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */


var coinChange = function(coins, amount) {
    if (amount < 1)
        return 0;
    else
        return coinChangeSub(coins, amount, Array(amount).fill(0));
}

function coinChangeSub(coins, amountRemaining, solutions) {
    if (amountRemaining < 0) return -1;
    if (amountRemaining === 0) return 0;
    
    if (solutions[amountRemaining - 1] !== 0)
        return solutions[amountRemaining - 1];

    var optimalSolution = Infinity;
    
    // Determine the optimal coin
    for (const coin of coins) {
        var solutionUsingThisCoin = coinChangeSub(coins, amountRemaining - coin, solutions);
        if (solutionUsingThisCoin >= 0 && solutionUsingThisCoin < optimalSolution) {
            optimalSolution = solutionUsingThisCoin + 1;
        }
    }
    
    if (optimalSolution === Infinity)
        solutions[amountRemaining - 1] = -1;
    else
        solutions[amountRemaining - 1] = optimalSolution;

    return solutions[amountRemaining - 1];
};