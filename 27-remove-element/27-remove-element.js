/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0,j=0;
    
    while(i < nums.length){
        if(nums[i] !== val){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j++;
        }
        else{ i++; }
    }
    return j
};
// [3 , 3 , 2 ,2]
//             i
//     j

