/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    //empty set
    let answer = [];
    answer.push([])
    if(!nums.length) return answer;
    
    for(let num of nums){
        let answerSize = answer.length;
        for(let i = 0 ; i < answerSize ; i++){
            let set_replica = answer[i].slice(0);
            set_replica.push(num);
            answer.push(set_replica);
        }
    }
    
    return answer;
};

//[1 , 2 , 3]
//         i

//[[] , [1] , [2] , [1,2] , [3] , [1 , 3] , [2 , 3] , [1 , 2 , 3]]
