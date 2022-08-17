/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(arr) {
  let i = 0,
      j = 0;

  //PART 1 : DEAL WITH TWOS FIRST.
  while(j <= i && i < arr.length){
    if(arr[i] !== 2){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;j++;
    }
    else{
      i++;
    }
  }

  //HANDLE ONES.
 let newEnd = j;
 i = 0;
 j = 0;
 while(j <= i && i < newEnd){
    if(arr[i] !== 1){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j++;
    }
    else{
      i++;
    }
  }

  return arr;
};