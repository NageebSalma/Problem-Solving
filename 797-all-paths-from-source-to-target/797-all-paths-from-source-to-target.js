/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let queue = [[0]];
    let results = [];
    let target = graph.length-1;
    // console.log(target)
    
    while(queue.length){
        let path = queue.shift();
        let lastNode = path[path.length-1]
        // console.log(lastNode)
        
        if( lastNode !== target){
            for(let neighbor of graph[lastNode]){
                let list = []
                list.push(...path)
                list.push(neighbor)
                queue.push(list);
                // console.log(queue)
            }
        }
        else{
            results.push(path);            
        }
    }
    return results;
};