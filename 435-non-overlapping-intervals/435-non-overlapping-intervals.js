/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length < 2) return 0;
    
    intervals.sort((a,b) => a[0] - b[0]);
    
    let remove = 0;
    let firstInterval = intervals[0];
    for(let i = 1 ; i < intervals.length ; i++){
        let secondInterval = intervals[i];
        
        if(secondInterval[0] < firstInterval[1]){
            firstInterval[1] = Math.min(firstInterval[1] , secondInterval[1]);
            remove++;
        }
        else{
            firstInterval = secondInterval;
        }
    }
    
    return remove;

};


//[[1,2],[2,3],[3,4]
//   F     S
//when there is an overlap, I set my first interval to the interval 
//that finishes first. 