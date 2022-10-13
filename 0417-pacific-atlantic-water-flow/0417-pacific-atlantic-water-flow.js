/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    
    let rows = heights.length, cols = heights[0].length;
    
    //cells touching the pacific ocean are located in (first row, first column)
    //cells touching the atlantic ocean are located in(last row, last column)
    //we are going to perform a dfs on all of the forementioned locations.
    //store the visited cells in Sets , because: 1- we do not want duplicates, 2- we check for overlap!
    
    let can_reach_pacific = new Set();
    let can_reach_atlantic= new Set();
    
    //lets create a dfs function:
    function dfs(oceanType, i , j, prev_height){
        const key = i+','+j;
        //base cases
        if(oceanType == 'pacific' && can_reach_pacific.has(key)) return;
        if(oceanType == 'atlantic' && can_reach_atlantic.has(key)) return;
        if(i < 0 || i >= rows || j < 0 || j >= cols) return;
        if(heights[i][j] < prev_height) return;
        
        if(oceanType == 'pacific') can_reach_pacific.add(key)
        else can_reach_atlantic.add(key);
        
        dfs(oceanType, i+1 , j, heights[i][j]);
        dfs(oceanType, i-1 , j, heights[i][j]);
        dfs(oceanType, i , j+1, heights[i][j]);
        dfs(oceanType, i , j-1, heights[i][j]);
    };
    
    //#1: pacific calls.
    //first row, pacific dfs call.
    for(let col = 0 ; col < cols ; col++){
        dfs('pacific' , 0 , col , heights[0][col]);
    };
    
    //first col, pacific call
    for(let row = 0 ; row < rows ; row++){
        dfs('pacific' , row, 0, heights[row][0]);
    };
    
    
    //#2: atlantic calls.
    //last row, atlantic dfs call.
    for(let col = 0 ; col < cols ; col++){
        dfs('atlantic' , rows-1 , col , heights[rows-1][col]);
    };
    //last col, atlantic dfs call
    for(row = 0; row < rows ; row++){
        dfs('atlantic', row, cols-1, heights[row][cols-1]);
    };
    
    //now we expct to have two sets of cells that touch the different oceans.
    //so, we need to find the overlap!
    
    let output = [];
    for(let pacific_cell of can_reach_pacific){
        if(can_reach_atlantic.has(pacific_cell)){
            let combo = pacific_cell.split(',');
            output.push(combo);
        }
    }
    
    return output;
};