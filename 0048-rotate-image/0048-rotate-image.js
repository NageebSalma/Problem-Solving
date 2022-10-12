/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    flip_around_diagonal(matrix);
    flip_around_y(matrix);    
    return matrix;
};


function flip_around_y(matrix){
    for(let i = 0 ; i < matrix.length ; i++){//accessing row by row.
        let col1 = 0, col2 = matrix[0].length-1;
        while(col1 < col2){
            //swapping.
            let temp = matrix[i][col1];
            matrix[i][col1] = matrix[i][col2];
            matrix[i][col2] = temp;
            
            col1++;
            col2--;
        };
    };
};

function flip_around_diagonal(matrix){
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
};

//  7 4 | 0 1
//  8 5 | 0 2
//  9 6 | 0 3

//find the middle column, and flip opposing columns around its axis.
//Q1-> what is the middle column? it's the column that has a col val of floor(arr.length/2) for odd length columns
//     and for even length columns number, we will flip around an imaginary axis.

//find the diagnol of the matrix, and flip opposing cells around its axis.
//Q2-> how do we find the diagonal? the diagonal starts at the top right corner at[0][last_col] and ends at bottom left corner [last_row][0]

