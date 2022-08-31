/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let answer = [];
    
    let sets = [];
    sets.push([]);
    
    for(let num of nums){
        let sets_size = sets.length;
        
        for(let i = 0 ; i < sets_size ; i++){
            
            let prev_perm = sets.shift();
            let possible_positions = prev_perm.length + 1;
            
            for(let position = 0  ; position < possible_positions ; position++){
                let prev_perm_replica = prev_perm.slice(0);
                prev_perm_replica.splice(position , 0 , num);
                
                if(prev_perm_replica.length == nums.length) answer.push(prev_perm_replica);
                else sets.push(prev_perm_replica);
            }
        }
    }
    
    
    return answer;
};