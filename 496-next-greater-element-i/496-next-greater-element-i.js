/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [], next_greatest = {};
    
    for(const num of nums2){
        while(stack.length > 0 && stack[stack.length-1] < num){
            const peek = stack.pop();
            next_greatest[peek] = num;
        };
        stack.push(num);
    };
    // console.log(next_greatest)
    for(let i = 0 ; i < nums1.length ; i++){
        let num = nums1[i];
        if(num in next_greatest) nums1[i] = next_greatest[num];
        else nums1[i] = -1;
    };
    
    return nums1;
};

