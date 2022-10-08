/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(arr, key) {
   let start = 0, end = arr.length-1, mid;

  while(start <= end){
    mid = Math.floor((start+end)/2);
    if(arr[mid] == key) return true;

  
    if(arr[mid] === arr[start] && arr[start] === arr[end]){start+=1; end-=1;}
    else if(arr[mid] >= arr[start]){//check if we are at left side(compare arr[mid] to arr[start])
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
  return false;
};