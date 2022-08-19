/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, new_interval) {
  let merged = [] , i = 0;

  while(i < intervals.length && intervals[i][1] < new_interval[0]){
    merged.push(intervals[i]);
    i++;
  };
    
  while (i < intervals.length && intervals[i][0] <= new_interval[1]) {
    new_interval[0] = Math.min(intervals[i][0], new_interval[0]);
    new_interval[1] = Math.max(intervals[i][1], new_interval[1]);
    i += 1;
  }
  merged.push(new_interval);

  while(i < intervals.length){merged.push(intervals[i]) ; i++;}
  
  return merged;
}