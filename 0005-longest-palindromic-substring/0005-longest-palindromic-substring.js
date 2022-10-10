/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length == 0 || s.length == 1) return s;
    
    let res = "", output =""
    let max_length = 0;
    let oddLength = false;
    if(!(s.length % 2)) oddLength = true;
    
    for(let i = 0 ; i < s.length ; i++){
        let l= i, r=i;
        
        while(l >= 0 && r < s.length && s[l] == s[r]){
            if(r-l+1 > max_length){
                res = s.slice(l,r+1);
                output = res; 
                max_length = res.length;
            };
            l--;
            r++;
        };
        
        l= i, r=i+1;
        
        while(l >= 0 && r < s.length && s[l] == s[r]){
            if(r-l+1 > max_length){
                res = s.slice(l,r+1);
                output = res; 
                max_length = res.length;
            };
            l--;
            r++;
        };
    };
    return output; 
};

//cbbd