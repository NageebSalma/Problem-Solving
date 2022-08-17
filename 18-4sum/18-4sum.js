/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(arr, target) {
  if(arr.length < 4) return [];
    
  let quadruplets = [];    
  let s, l , r;
  arr.sort((a,b) => a-b);

  for(let j = 0 ; j  <= arr.length-4 ; j++){
    if (j > 0 && arr[j] === arr[j - 1]) continue;
    for(let i = j + 1 ; i <= arr.length-3 ; i++){
        if (i > j+1 && arr[i] === arr[i - 1]) continue;

        l = i + 1;
        r = arr.length - 1;
        while( l < r ){    
            let sum = arr[l] + arr[r] + arr[i] + arr[j];
            
            if(sum == target) {
                quadruplets.push([arr[l] , arr[r] , arr[j] , arr[i]])
                l++ ; r--;
                while(l < r && arr[l] == arr[l-1]){
                    l++;
                }
                while(r > l && arr[r] == arr[r+1]){
                    r--;
                }
            }
            else if(sum > target) r--;
            else l++;
        }
    }
  }
  return quadruplets;
};