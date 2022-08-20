/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, new_interval) {
    let result = [], i = 0;
    
    //all non overlapping intervals before the new interval
    while(i  < intervals.length && intervals[i][1] < new_interval[0]){
        result.push(intervals[i]);
        i++;
    }
    
    //let's deal with overlapping intervals, and make new interval swallow them all by updating it.
    while(i < intervals.length && intervals[i][0] <= new_interval[1]){
        new_interval = [Math.min(intervals[i][0],new_interval[0]),Math.max(new_interval[1],intervals[i][1])];
        i++;
    }
    result.push(new_interval);
    
    while(i < intervals.length){
        result.push(intervals[i]); i++;
    }
    
    return result;
}

