/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(num) {
  let slow = num, fast = num;

  while(true){
    slow = squareDigitsSum(slow);
    fast = squareDigitsSum(squareDigitsSum(fast));
    if(fast == slow) break;
  }

  return slow == 1;
};

function squareDigitsSum(num){
  num = num+'';
  let sum = 0;

  for(let digit of num){
    sum += Math.pow(+digit , 2);
  }

  return sum;
}
