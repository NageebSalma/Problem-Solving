/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(' ')
    // console.log(arr)
    for(let i = arr.length-1 ; i >= 0 ; i--){
        if(arr[i] !== ''){
            // console.log(arr[i])
            return arr[i].length
        }
    }
    
};