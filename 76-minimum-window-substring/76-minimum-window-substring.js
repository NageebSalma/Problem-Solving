/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(str, pattern) {
   //define essential variables
  let freqObj = {},
      start = 0,
      end = 0,
      satissfiedMatches = 0,
      minStart = 0,
      minLen = str.length+1;
    
  //fill in our freqObj
  for(letter of pattern){
    freqObj[letter] ? freqObj[letter]++ : freqObj[letter] = 1;
  }
  
  for(end ; end < str.length ; end++){
    if(str[end] in freqObj){
      freqObj[str[end]]--;
      if(freqObj[str[end]] == 0) satissfiedMatches++;
    } 

    while(satissfiedMatches == Object.keys(freqObj).length){
      minLen = Math.min(minLen , end - start + 1);
      //check if minLen got updated, if yes then update minStart
      if(minLen == end - start + 1) minStart = start;
        
      if(str[start] in freqObj){
        if(freqObj[str[start]] == 0) satissfiedMatches -= 1;
        freqObj[str[start]] += 1;
      }
      start++;
    }
  }
  return minLen == str.length+1 ? "" : str.substring(minStart , minStart+minLen)
};