/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// const {
//   PriorityQueue,
//   MinPriorityQueue,
// } = require('@datastructures-js/priority-queue');

var findKthLargest = function(nums, k) {
    const minPriorityQueue = new MinPriorityQueue((a , b) => b - a);
    
    for(let i = 0 ; i  < k ; i++){
        minPriorityQueue.enqueue(nums[i]);
    };
    
    for(let i = k ; i < nums.length ; i++){
        if(nums[i] > minPriorityQueue.front().element){
            minPriorityQueue.dequeue();
            minPriorityQueue.enqueue(nums[i]);
        }
    }
    
    return minPriorityQueue.front().element;
};