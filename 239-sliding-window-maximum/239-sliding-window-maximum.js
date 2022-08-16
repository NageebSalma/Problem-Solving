/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class Deque{
  constructor(){
    //To track the elements from back
    this.count = 0;
    
    //To track the elements from front
    this.lowestCount = 0;
    
    //To store the elements
    this.items = {};
  }
  
  //Add an item on the front
  insertFront = (elm) => {
    if(this.isEmpty()){
      //If empty then add on the back
      this.insertBack(elm);
   
    }else if(this.lowestCount > 0){
      //Else if there is item on the back 
      //then add to its front
      this.items[--this.lowestCount] = elm;
      
    }else{
      //Else shift the existing items 
      //and add the new to the front
      for(let i = this.count; i > 0; i--){
        this.items[i] = this.items[i - 1];
      }
      
      this.count++;
      this.items[0] = elm;
    }
  }
  
  //Add an item on the back of the list
  insertBack = (elm) => {
    this.items[this.count++] = elm;
  }

  //Remove the item from the front
  removeFront = () => {
    //if empty return null
    if(this.isEmpty()){
      return null;
    }

    //Get the first item and return it
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  //Remove the item from the back
  removeBack = () => {
    //if empty return null
    if(this.isEmpty()){
      return null;
    }

    //Get the last item and return it
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  //Peek the first element
  getFront = () => {
    //If empty then return null
    if(this.isEmpty()){
      return null;
    }

    //Return first element
    return this.items[this.lowestCount];
  }

  //Peek the last element
  getBack = () => {
    //If empty then return null
    if(this.isEmpty()){
      return null;
    }

    //Return first element
    return this.items[this.count - 1];
  }

  //Check if empty
  isEmpty = () => {
    return this.size() === 0;
  }

  //Get the size
  size = () => {
    return this.count - this.lowestCount;
  }

  //Clear the deque
  clear = () => {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  //Convert to the string
  //From front to back
  toString = () => {
    if (this.isEmpty()) {
      return '';
    }
    
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
  
}
var maxSlidingWindow = function(nums, k) {
    const q = [];  // stores *indices*
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        while (q && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        q.push(i);
        // remove first element if it's outside the window
        if (q[0] === i - k) {
            q.shift();
        }
        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    return res; 
};