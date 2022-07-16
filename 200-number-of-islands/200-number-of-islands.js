/**
 * @param {character[][]} grid
 * @return {number}
 */


//time complexity : O(m*n)
function changeLandIntoWater(grid , i , j){
   //base conditions: i or j are out of bound , grid[i][j] == 0
    if(i < 0 || j < 0 || i === grid.length || j === grid[0].length || grid[i][j] == 0) return;
    grid[i][j] = '0';
    changeLandIntoWater(grid , i+1 , j)
    changeLandIntoWater(grid , i-1 , j)
    changeLandIntoWater(grid , i , j+1)
    changeLandIntoWater(grid , i , j-1)
}

var numIslands = function(grid) {
    if(!grid) return 0;
    
    let rows = grid.length;
    let cols = grid[0].length;
    let islandCount = 0;
    
    for(let i = 0 ; i < rows ; i++){
        for(let j = 0 ; j < cols ; j++){
            if(grid[i][j] === '1') {
                //1- increase our island count
                islandCount += 1;
                
                //2- change all surrounding ones into zeros/water
                changeLandIntoWater(grid , i , j);
            }
            
        }
    }
    return islandCount;
};