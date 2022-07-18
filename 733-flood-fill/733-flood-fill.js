/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function changePixelToColor(image , i , j , color , startingPixel){
    if(i < 0 || j < 0 || i === image.length || j === image[0].length|| image[i][j] !== startingPixel) return;
    
    image[i][j] = color;
    changePixelToColor(image , i , j+1 , color , startingPixel)
    changePixelToColor(image , i , j-1 , color , startingPixel)
    changePixelToColor(image , i-1 , j , color , startingPixel)
    changePixelToColor(image , i+1 , j , color , startingPixel)

}

var floodFill = function(image, sr, sc, color) {
//     let rows = image.length
//     let cols = image[0].length
//     let startingPixel = image[sr][sc]
    
//     for(let i = sr ; i < rows ; i++){
//         for(let j = sc ; j < cols ; j++){
//             changePixelToColor(image , i , j , color ,startingPixel)
//         }
//     }
//     return image
    let startingPixel = image[sr][sc];
    if(startingPixel === color) return image;
    const queue = [[sr, sc]];
    
    while(queue.length) {
        const [row, col] = queue.shift();
        if(image[row][col] === startingPixel) {
            image[row][col] = color
			if(row-1 >= 0) queue.push([row-1, col]);  //up
            if(row+1 < image.length) queue.push([row+1, col]);  //down
            if(col+1 < image[0].length) queue.push([row, col+1]);  //right
            if(col-1 >= 0) queue.push([row, col-1]);  //left
        }
    }
    return image;
};