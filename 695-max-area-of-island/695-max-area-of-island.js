/**
 * @param {number[][]} grid
 * @return {number}
 */
function outOfBounds (i , j , rows , cols){
    return (i <0 || j < 0 || i == rows || j == cols);
}
function changeLandIntoWater(grid , i , j){
    if(outOfBounds(i , j , grid.length , grid[0].length) || grid[i][j] == 0) return 0;
    
    grid[i][j] = 0;
    
    let left =  changeLandIntoWater(grid , i , j-1);
    let right = changeLandIntoWater(grid , i , j+1);
    let up =    changeLandIntoWater(grid , i-1 , j);
    let down =  changeLandIntoWater(grid , i+1 , j);
    
    return left + right + up + down  + 1;
}


var maxAreaOfIsland = function(grid) {
    
    let rows = grid.length;
    let cols = grid[0].length;
    let maxArea = 0;
    
    for(let i = 0 ; i  < rows ; i++){
        for(let j = 0 ; j < cols ; j++){
            if(grid[i][j] == '1'){
                maxArea = Math.max(maxArea , changeLandIntoWater(grid , i , j));
            }
        }
    }
    
    return maxArea;
};