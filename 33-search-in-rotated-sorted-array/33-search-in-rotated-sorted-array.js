/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//[5 , 6 , 0 , 1 ,2 ,3 ,4], target = 3
//             l  m     r
//           
//if(mid >= the leftmostelement of my left portion aka arr[left])
// then mid point belongs to left array 
//  if not coherent with lef tportion => move my left pointer to the beginning of right portion

// else 
// then mid point is coherent with right portion of array 
// if target <= rightmost element of the right array 





var search = function(arr, key) {
   let start = 0, end = arr.length-1, mid;

  while(start <= end){
    mid = Math.floor((start+end)/2);
    if(arr[mid] == key) return mid;

  
    //check if we are at left side(compare arr[mid] to arr[start])
    if(arr[mid] >= arr[start]){
      //check if key is in range from start to mid-1
      if(key >= arr[start] && key < arr[mid]) end = mid-1;
      else start = mid + 1;
    }
    else{
      //check if in range from mid+1 to end
      if(key <= arr[end] && key > arr[mid]) start= mid + 1;
      else end = mid - 1;
    };
  }
  return -1;
};