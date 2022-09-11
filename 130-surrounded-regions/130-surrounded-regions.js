/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function change_perimiter_O_to_temp(board , i , j){
    if(outOfBounds(board , i , j) || board[i][j] == 'X' || board[i][j] == 'temp') return;
    
    board[i][j] = 'temp';
    change_perimiter_O_to_temp(board , i , j-1)
    change_perimiter_O_to_temp(board , i , j+1)
    change_perimiter_O_to_temp(board , i-1 , j)
    change_perimiter_O_to_temp(board , i+1 , j)
}

var solve = function(board) {
    let cols = board[0].length,
        rows = board.length;
    
    
    for(let i = 0 ; i < rows ; i++){
        let letter = board[i][0];
        if(letter == 'O') change_perimiter_O_to_temp(board , i , 0);
    };
    
    for(let j = 0 ; j < cols ; j++){
        let letter = board[0][j];
        if(letter == 'O') change_perimiter_O_to_temp(board , 0 , j);
    };
    
     for(let i = 0 ; i < rows ; i++){
        let letter = board[i][cols-1];
        if(letter == 'O') change_perimiter_O_to_temp(board , i , cols-1);
    };
    
    for(let j = 0 ; j < cols ; j++){
        let letter = board[rows-1][j];
        if(letter == 'O') change_perimiter_O_to_temp(board , rows-1 , j);
    };
    
    
    for(let i = 1 ; i < rows-1 ; i++){
        for(let j = 1 ; j < cols-1 ; j++){
            let letter = board[i][j];
            if(letter == 'O'){
               board[i][j] = 'X';
            };
        };
    };
    
    for(let i = 0 ; i < rows ; i++){
        for(let j = 0 ; j < cols ; j++){
            let letter = board[i][j];
            if(letter == 'temp'){
               board[i][j] = 'O';
            }
        }
    };
    
    
    return board;
};

const onPerimiters = (board , i , j) =>{
    if(i == board.length-1 || i == 0 || j == 0 || j == board[0].length-1) return true;
    return false;
};
    
const outOfBounds = (board , i , j) =>{
    if(i == board.length || i == -1 || j == -1 || j == board[0].length) return true;
    return false;
}



// [["O","X","X","O","X"]
//  ["X","O","O","X","O"]
//  ["X","O","X","O","X"]
//  ["O","X","O","O","O"]
//  ["X","X","O","X","O"]]

// [["O","X","X","O","X"]
//  ["X","X","X","X","O"]
//  ["X","X","X","O","X"]
//  ["O","X","X","X","O"]
//  ["X","X","O","X","O"]]