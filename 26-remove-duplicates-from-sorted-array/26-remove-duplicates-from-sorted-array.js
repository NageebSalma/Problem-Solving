/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(arr) {
     //edge case
  if(!arr.length) return 0;
  if(arr.length==1) return 1;

  let start = 0,
      end =0;

  while(end < arr.length){
   if(arr[end] < arr[start]){
     let temp = arr[end];
     arr[end] = arr[start];
     arr[start] = temp;
   }
   else if(arr[end] > arr[start]){
     start++;
     let temp = arr[start];
     arr[start] = arr[end];
     arr[end] = temp;
   }

   end++;
  }
  // console.log(arr.slice(0,start+1) , start , end)

  return start+1;
};