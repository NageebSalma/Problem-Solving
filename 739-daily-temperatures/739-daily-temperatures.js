/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = []
    let tempsLength = temperatures.length;
    let answArr = new Array(tempsLength).fill(0)

    
    for(let i = 0; i < tempsLength ; i++){        
        while(stack.length > 0 && stack[stack.length-1][0] < temperatures[i]){
            const [temp , idx] = stack.pop();
            answArr[idx] = i - idx;
        };
        stack.push([temperatures[i] , i]);
    };
    return answArr
};