/**
 * @param {number} x
 * @return {number}
 */

//sqrt(4) //2
//1,2,3,4    
//1*1 = 4? nope 1
//2*2 = 4? YES return 2

//sqrt(7)
//1 , 2 ,3 ,4 ,5 ,6 , 7
//1*1 = 1 no 
//2*2 = 4 
//3*3 = 9 > input THEN we go with the previous answer which is 2 

var mySqrt = function(x) {
    if(x==1 || x == 0) return x
    let ans 
    for(let i = 1 ; i < x ; i++){
        let multip = i * i ;
        if(multip ===x ) return i;
        if(multip < x) ans = i
        if(multip > x) return ans
    }
    return ans
}

// var mySqrt = function(x) {
//      if(x === 0 || x === 1) return x;
    
//     let left = 1;
//     let right = x;
//     let mid;
//     let answerTracker = 0;
    
//     while(left <= right){
//         mid = Math.floor((right + left) / 2);
        
//         if(mid * mid === x) return mid;
//         if(mid * mid > x) right = mid - 1;
//         if(mid * mid < x) {
//             left = mid + 1;
//             answerTracker = mid;
//         }
//     }
     
//     return answerTracker;
// };