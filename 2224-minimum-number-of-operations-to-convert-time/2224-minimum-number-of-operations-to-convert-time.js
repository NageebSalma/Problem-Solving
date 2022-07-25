/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    if(current === correct) return 0;
       const [currentHH, currentMM] = current.split(':').map((val) => Number(val));
    const [correctHH, correctMM] = correct.split(':').map((val) => Number(val));
    
    let total = 0;
    
    total += correctHH - currentHH;
    
    let diff = correctMM - currentMM;
    
    // for negative where needed minutes are lower than the current minutes
    if (correctMM < currentMM) {
        total -= 1;
        diff += 60;
    }


    if (diff >= 15) {
        total += Math.floor(diff / 15);
        diff = diff % 15;
    }

    if (diff >= 5) {
        total += Math.floor(diff / 5);
        diff = diff % 5;
    }

    if (diff > 0) {
        total += diff;
    }

    return total;
    

    
};