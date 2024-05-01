/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    var step = 0;
    var currCapacity = capacity;
    const n = plants.length;
    
    for (let i = 0; i < n; i++) {
        if (currCapacity >= plants[i]) {
            step++;
            currCapacity -= plants[i];
        } else {
            currCapacity = capacity;
            currCapacity -= plants[i];
            step += (2 * i + 1);
        }
    }
    
    return step;
};