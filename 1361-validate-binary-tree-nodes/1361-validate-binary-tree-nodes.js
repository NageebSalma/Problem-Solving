/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    
    //let's create our graph!
    let graph = {};
    let in_degree = {};
    
    for(let node = 0 ; node < n ; node++){
        graph[node] = [];
        in_degree[node] = 0;
    };
    
    let number_of_edges = 0;
    for(let i = 0 ; i < leftChild.length ; i++){
        const parent = i;
        const left_child = leftChild[i];
        const right_child = rightChild[i];
        
        if(left_child !== -1){
            graph[parent].push(left_child);
            number_of_edges++;
            in_degree[left_child]++;
        };
        if(right_child !== -1){
            graph[parent].push(right_child);
            number_of_edges++;
            in_degree[right_child]++;
        };
    };
    
    let zero_in_degrees = [];
    for(const node in in_degree){
        if(in_degree[node] == 0) zero_in_degrees.push(node);
    };
    if(zero_in_degrees.length == 0) return false; // if i have no root node to kickstart my dfs.
    
    
    let visited = new Set();
    (function dfs(node){
        visited.add(node);
        
        const children = graph[node];
        if(children.length > 0){
            for(const child of children){
                if(!visited.has(child)) dfs(child);
            };
        };
    })(zero_in_degrees[0]);

    //if the graph is disconnected or there is a cycle in the graph
    if(visited.size !== n || number_of_edges > n-1) return false;
    
    return true;    
};
// 2
// [1,0]
// [-1,-1]

// 2
// [1,0]
// [-1,-1]

// 4
// [1,0,3,-1]
// [-1,-1,-1,-1]

// 4
// [3,-1,1,-1]
// [-1,-1,0,-1]