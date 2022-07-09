/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let hash = {};

    for(let word of wordList){
       if(word!== beginWord) hash[word] = true;
    }
    if(!hash[endWord]) return 0;
    
    
    let queue = [beginWord];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let level = 1;
    
    while(queue.length){
        let next = []
        
        for(let word of queue){
            
            if(word=== endWord) return level;

            for(let i= 0 ; i < word.length;  i++){
                for(let letter of alphabet){
                    let modified = word.slice(0,i)+letter+word.slice(i+1)
                    if(hash[modified]){
                        next.push(modified)
                        delete hash[modified]
                    }
                }
            }
        }
        queue = next;
        level++;
        
    }
    return 0;
};

