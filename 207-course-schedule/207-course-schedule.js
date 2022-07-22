/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function dfsTopSortHelper(n , v , topologicalNums , visited , adjList){
    // if(visited.length==adjList.length) return;
    // console.log(topologicalNums)
    visited[v] = true;
    let neighbors  = adjList[v]
    for(let neighbor of neighbors){
        if(!visited[neighbor]){
            n = dfsTopSortHelper(neighbor , v , topologicalNums , visited , adjList)
        }
    }
    topologicalNums[v] = n;
    // console.log(topologicalNums)
    return n-1;
}

function isCyclic(adjList , visited , v){
    // console.log(visited)
    if(visited[v] > 1) return true;
    visited[v] = 2;                                                                                                                           
    for(let neighbor of adjList[v]){
          if(visited[neighbor] != 1){
              // ++visited[neighbor];
              if(isCyclic(adjList,visited,neighbor)) return true
          } 
    }
    visited[v] = 1
  return false;
    
}

var canFinish = function(numCourses, preqs) {
    
    let adjList = {}
     let vertices = []
    let visited = {};
     let topologicalNums = {};
    

    for(let i = 0 ;  i < numCourses ; i++){
        adjList[i] = []
        vertices.push(i)
        visited[i] = 0;
        for(let p of preqs){
            if (p[0] === i) adjList[i].push(p[1])
            
        }
        
    }
        let n = vertices.length-1;

   
    for(let v of vertices){
        if(!visited[v]){
            // 
            if(isCyclic(adjList , visited , v)) return false;
            else n = dfsTopSortHelper(n , v , topologicalNums, visited , adjList)
        }
    }
    
    console.log(topologicalNums)
    return true;

};