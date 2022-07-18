/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let queue = [rooms[0]]
    let visited = {}
    visited[0] = true;
    
    while(queue.length){
        let keysInRoom = queue.shift();
        
        for(let key of keysInRoom){
            if(!visited[key]){
                visited[key] = true;
                queue.push(rooms[key])
            } 
        }
    }
    for(let i= 0 ; i < rooms.length ; i++){
        if(!visited[i]) return false;
    }
    return true;
};