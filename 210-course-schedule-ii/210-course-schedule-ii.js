/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var findOrder = function(numCourses, preqs) {
    if(numCourses == 1) return [0];
    
    let adjList = {}
    let crossed = {}; //this is when the course is done with all its children, and added to output.
    let seenBefore = {};
    let output = [];
    
    for (let i = 0; i < numCourses; i++) {
        adjList[i] = [];
    }
    for (const [crs, pre] of preqs) {
        adjList[crs].push(pre);
    }
    
    let canBeCompleted = (course) =>{
        if(crossed[course]) return true;
        if(seenBefore[course]) return false;
        
        seenBefore[course] = true;
        for(let preReq of adjList[course]){
            if(!canBeCompleted(preReq)) return false;
        }
        delete seenBefore[course];
        output.push(course);    
        crossed[course] = true;

        return true;
    }
    
    for(let i = 0 ; i < numCourses ; i++){
        if(!canBeCompleted(i)) return []
    }
    return output;
};