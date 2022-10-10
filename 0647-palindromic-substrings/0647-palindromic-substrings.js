/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
     if(s.length == 0 || s.length == 1) return 1;
    
    let res = "", amount = 0;
    let max_length = 0;
    
    for(let i = 0 ; i < s.length ; i++){ //O(n)
        
        //make up an odd length palindrome
        let l= i, r=i;
        while(l >= 0 && r < s.length && s[l] == s[r]){
            amount++;
            l--; r++;
        };
        
        //make up an even length palindrome
        l= i, r=i+1;
        while(l >= 0 && r < s.length && s[l] == s[r]){
            amount++;
            l--; r++;
        };
    };
    return amount; 
};