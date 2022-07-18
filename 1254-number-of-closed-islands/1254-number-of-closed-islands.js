/**
 * @param {number[][]} grid
 * @return {number}
 */

function isClosedIsland(grid , i , j){
    if(grid[i][j] === 1 || grid[i][j] === 'x') return true
    if(i == 0 || j == 0 || i == grid.length-1 || j == grid[0].length-1) return false;
    
    grid[i][j] = 'x';
    let left = isClosedIsland(grid , i-1 , j)
    let right = isClosedIsland(grid , i+1 , j)
    let down = isClosedIsland(grid , i , j-1)
    let up = isClosedIsland(grid , i , j+1)
    if(left && right && up && down) return true;
    else return false;

}

var closedIsland = function(grid) {
    if(!grid) return 0;
    
    let closedIslandCount = 0;
    
    for(let i = 1 ; i < grid.length-1 ; i++){
        for(let j = 1 ; j < grid[0].length-1 ; j++){
            //1 - if we found water we increase our cIc 
            if(grid[i][j] === 0) {
                if(isClosedIsland(grid , i , j)) closedIslandCount++;
                // console.log(i,j)
            }   
        }
    }

    return closedIslandCount;
};