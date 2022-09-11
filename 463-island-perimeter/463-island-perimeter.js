/**
 * @param {number[][]} grid
 * @return {number}
 */

function countEdges(i , j , grid){
    let edges = 0;
    
    if(i== 0|| grid[i-1][j] == 0) edges += 1;
    if(j== 0 || grid[i][j-1] == 0) edges += 1;
    if(i==grid.length -1 || grid[i+1][j] == 0) edges += 1;
    if(j == grid[0].length- 1 || grid[i][j+1] == 0) edges += 1;

    
    return edges;
}

var islandPerimeter = function(grid) {
    let edges = 0;
    for(let i = 0 ; i  < grid.length ; i++){
        for(let j = 0 ; j  < grid[0].length ; j++){
            if(grid[i][j] == 1){
                edges += countEdges(i , j , grid);
            }
        }
    }
    return edges;
};