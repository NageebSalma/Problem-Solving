/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2 , w1Flag = 1) {
    //base cases
    if(word1.length == 0){
        if(word2.length == 0) return '';
        else return word2;
    }
    else if(word2.length == 0) return word1;
    
    
    //recursive cases
    if(w1Flag == 1) return word1[0] + mergeAlternately(word1.substr(1) , word2 , w1Flag * -1);
    else if(w1Flag == -1) return word2[0] + mergeAlternately(word1 , word2.substr(1) , w1Flag * -1);

};