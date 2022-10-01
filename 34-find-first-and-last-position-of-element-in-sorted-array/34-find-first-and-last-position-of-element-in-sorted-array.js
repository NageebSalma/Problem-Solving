/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result  = [-1 ,-1];
    
    result[0] = binarySearch(nums , target, lookLeft = true);
    
    if(result[0] !== -1){
        result[1] = binarySearch(nums , target, lookLeft = false);
    };
    
    return result;
};

function binarySearch(nums , target , lookLeft){
    let left = 0, right = nums.length-1, mid, finalPos= -1;
    
    while(left <= right){
        mid = Math.floor((left+right) / 2);
        
        if(nums[mid] == target){
            finalPos = mid;
            if(lookLeft){//looking for starting index;
                right = mid-1;
            }
            else left = mid + 1;
        }
        else if(nums[mid] > target){
            right = mid - 1;
        }
        else{left = mid + 1}
    };
    
    return finalPos;
}