/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(aList, bList) {
    let result = [],
    i = 0,
    j = 0;

  while (i < aList.length && j < bList.length) {
      let a_overlaps_b = aList[i][0] >= bList[j][0] && aList[i][0] <= bList[j][1];
      let b_overlaps_a = bList[j][0] >= aList[i][0] && bList[j][0] <= aList[i][1];
      
      if(a_overlaps_b || b_overlaps_a){
          result.push([Math.max(aList[i][0] , bList[j][0]) , Math.min(aList[i][1] , bList[j][1])]);
      }
     
      if(aList[i][1] < bList[j][1]) i++;
      else j++;
  }
    return result;
};