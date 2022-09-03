/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var findOrder = function(tasks, prerequisites) {

  let graph = {};
  let in_degree = {};

  for(let task = 0 ; task < tasks ; task++){
    graph[task] = [];
    in_degree[task] = 0;
  };

  for(let preq of prerequisites){
    let parent = preq[1], child = preq[0];
    graph[parent].push(child);
    in_degree[child]++;
  };

  let sorted = [], sources = [];
  for(let course in in_degree){
    if(in_degree[course] == 0) sources.push(course); 
  }
  if(!sources.length) return [];

  while(sources.length){
    let course = sources.shift();
    sorted.push(course);
    let dependentCourses = graph[course];

    for(let dependentCourse of dependentCourses){
      in_degree[dependentCourse]--;

      if(in_degree[dependentCourse] == 0) sources.push(dependentCourse);
    };
  }

  if(sorted.length !== tasks) return [];
  return sorted;
};