/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
     if(x === 0 || x === 1) return x;
    
    let left = 1;
    let right = x;
    let mid;
    let answerTracker = 0;
    
    while(left <= right){
        mid = Math.floor((right + left) / 2);
        
        if(mid * mid === x) return mid;
        if(mid * mid > x) right = mid - 1;
        if(mid * mid < x) {
            left = mid + 1;
            answerTracker = mid;
        }
    }
     
    return answerTracker;
};