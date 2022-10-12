/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target , result = []) {
    let results = [];
    
    (function discover_combinations(allowed_candidate_index, current_combination , total_current){
        //successful base case: 
        if(total_current == 0){
            results.push(current_combination.slice());
            return;
        };
        
        //failed base case
        if(total_current < 0 || allowed_candidate_index >= candidates.length) return; 
        
        
        //non of the test cases applied then go for: 
        
        //route 1: considering the current candidate
        const candidate = candidates[allowed_candidate_index];
        current_combination.push(candidate);
        discover_combinations(allowed_candidate_index, current_combination, total_current - candidate);
        
        //route 2: backtrack, and consider the next candidate
        current_combination.pop();
        discover_combinations(allowed_candidate_index+1, current_combination, total_current);

    })(0 , [] , target)
    
    return results;
};



