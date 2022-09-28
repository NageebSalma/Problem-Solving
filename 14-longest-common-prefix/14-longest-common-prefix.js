/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(arr){
  if(arr.length == 0) return "";
  if(arr.length == 1) return arr[0];
  if(arr == null) return null;
    
  //find prefix between every two words
  let pointer1 = 0, pointer2 = 0, first_word = arr[0], prefix ="";

  for(let i = 1 ; i < arr.length ; i++){
      let second_word = arr[i];
      
      let min_len = Math.min(first_word.length , second_word.length);
      while(pointer1 < min_len && pointer2 < min_len && first_word[pointer1] == second_word[pointer2]){
          pointer1++;pointer2++;
      };
      
      prefix = arr[i].slice(0 , pointer1);
      if(prefix == "") return "";
      
      first_word = prefix;
      pointer1 = 0, pointer2 = 0
  };
    return prefix;
};