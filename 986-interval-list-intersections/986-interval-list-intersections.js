/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(aList, bList) {
    let result = [], i = 0, j = 0;
    
    while(i < aList.length && j < bList.length){
        let a_intersects_b = aList[i][0] <= bList[j][0] && aList[i][1] >= bList[j][0];
        let b_intersects_a = bList[j][0] <= aList[i][0] && bList[j][1] >= aList[i][0];
        
        if(a_intersects_b || b_intersects_a){
            result.push([
                Math.max(aList[i][0] , bList[j][0])
                ,
                Math.min(bList[j][1] , aList[i][1])
            ]);
        }
        
        if(aList[i][1] < bList[j][1]) i++;
        else j++;
        
    }
    
    return result;
};


//when does a intersect b? a.start <= b.start && a.end >= b.start
//when does b intersect a? b.start <= a.start && b.end >= a.start