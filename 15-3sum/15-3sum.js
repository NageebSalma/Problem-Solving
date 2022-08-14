/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(arr) {
  triplets = [];
  // TODO: Write your code here
  arr.sort((a,b) => a-b)
  for(let i = 0 ; i < arr.length ; i++){
    if( i >  0 && arr[i] == arr[i-1]) continue;
    two_sum(triplets , -arr[i], i+1 , arr);
  }
  return triplets;
};

function two_sum(triplets , target , start , arr){
  let end = arr.length-1;
 
  while(start < end){
     let sCopy = start;
     let eCopy = end;

    if(arr[start] + arr[end] == target){
      triplets.push([arr[start] , arr[end] , -target]);
      start++;
      end--;
      while(start < end && arr[start] == arr[sCopy]) start++;
      while(start < end && arr[end] == arr[eCopy]) end--;

    }
    else if(arr[start] + arr[end] > target) end--;
    else start++;
  }
}