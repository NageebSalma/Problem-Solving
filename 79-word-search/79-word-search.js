/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for(let i = 0 ; i < board.length ; i++){
        for(let j = 0 ; j < board[0].length ; j++){
            if(board[i][j] == word[0] && dfs(i , j , board , word, letterCount = 0)){
                return true;
            };
        };
    };
    
    return false;
};

function dfs(i , j , board , word, letterCount){
    if(letterCount == word.length) return true;

    //out of bounds returns false or current letter just is a not what we're looking for.
    if(i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[letterCount]) return false;
    
    const temp = board[i][j];
    board[i][j] = '';
    
    const found = dfs(i+1 , j , board , word , letterCount+1) || dfs(i-1 , j , board , word , letterCount+1) || dfs(i , j+1 , board , word , letterCount+1) || dfs(i , j-1 , board , word , letterCount+1);
    
    board[i][j] = temp;
    
    return found;
};