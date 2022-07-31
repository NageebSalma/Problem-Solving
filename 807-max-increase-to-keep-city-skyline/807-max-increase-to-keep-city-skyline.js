/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let result = 0;
    let n = grid.length;
    
    let maxRowVals = new Array(n).fill(0);
    let maxColVals = new Array(n).fill(0);
    
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n ; j++){
            maxRowVals[i] = Math.max(maxRowVals[i] , grid[i][j] )
            maxColVals[j] = Math.max(maxColVals[j] , grid[i][j] )
        }
    }
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n ; j++){
            result += Math.min(maxRowVals[i] , maxColVals[j]) -grid[i][j]
        }
    }
    
    return result;
};