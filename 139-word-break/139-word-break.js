/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    
    function helper(s , wordDict , memo){
        if(s in memo) return memo[s];
        if(s == '') return true;
        
        const matchingPrefixArray = sendMatchingPrefix(s,wordDict);
        
        for(let matchingPrefix of matchingPrefixArray){
            const stringWithoutPrefix = s.slice(matchingPrefix.length);
            const result = helper(stringWithoutPrefix , wordDict , memo);
            if(result){
                return memo[s] = true;
            }
        };
        
        return memo[s] = false;
    };
    
    return helper(s , wordDict , memo = {});
};

function sendMatchingPrefix(s,wordDict){
    //send matching prefixes in form of array
    let result = [];
    for(let word of wordDict){
        if(s.indexOf(word) == 0){
            result.push(word);
        };
    };
    return result;
};



