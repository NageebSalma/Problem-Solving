/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let count = 0;
    const dict = {};
    
    for (const a of A) {
        for (const b of B) {
            const currSum = a + b;
            
            if (!dict[currSum]) {
                dict[currSum] = 0;
            }
            
            dict[currSum]++;
        }
    }
    
    for (const c of C) {
        for (const d of D) {
            const currSum = c + d;
            
            if (dict[-currSum]) {
                count += dict[-currSum];
            }   
        }
    }
    
    return count;
};