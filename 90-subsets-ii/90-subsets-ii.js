/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//[1 , 2 , 2]

var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a-b);
    
    
    if(!nums.length) return [[]];
    
    let answer = [];
    answer.push([]);
    let startIndex = 0 , endIndex = 0;
    
    for(let i = 0 ; i < nums.length ; i++){
        let currentLength = answer.length;

        startIndex = 0;
    // if current and the previous elements are same, create new subsets only from the subsets
    // added in the previous step
    if (i > 0 && nums[i] === nums[i - 1]) {
      startIndex = endIndex + 1;
    }
    endIndex = answer.length - 1;
    for (let j = startIndex; j < endIndex + 1; j++) {
                let set_replica = answer[j].slice(0);
                set_replica.push(nums[i]);
                answer.push(set_replica);
            }   
    }
    
    
    return answer;
};

//[1,2,3,4]
//     i

//result: [[] , [1] , [2] , [1 , 2] , [3] , [1 , 3] , [2 , 3] , [1 , 2 , 3] ,[4] , [1 , 4] , [2 , 4] , 
//[1 , 2 , 4] , [3 , 4] , [1 , 3 , 4] , [2 , 3 , 4] , [1 , 2 , 3 , 4]]

//relation between i and number of sets : 
//1.  i=0 , 1 extra set , two total sets
//2.  i=1 , 2 extra sets, four total sets
//3.  i=2 , 4 extra sets, eight total sets
//4.  i=3 , 8 extra sets, 16 total sets.


//relation between i and extra sets is 2(i+1);