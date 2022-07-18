/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node) return;
    let map = {};
    map[node.val] = new Node(node.val);
    let queue = []
    queue.push(node);
    
    while(queue.length){
        //dequeue
        let n = queue.shift();
        let neighbors = n.neighbors;
        for(let neighbor of neighbors){
            if(!map[neighbor.val]){
                map[neighbor.val] = new Node(neighbor.val);
                queue.push(neighbor);
            }
            map[n.val].neighbors.push(map[neighbor.val])
        }
    }
    return map[node.val]
};
