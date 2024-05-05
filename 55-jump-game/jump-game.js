/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const length = nums.length;
    let maxReach = 0;
    
    for (let index = 0; index < length; index++) {
        if (index > maxReach) {
            return false;
        }
        maxReach = Math.max(maxReach, index + nums[index]);
        if (maxReach >= length - 1) {
            return true;
        }
    }
    
    return false;
};