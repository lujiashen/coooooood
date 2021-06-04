/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let i = 0
    let min = nums[0]
    while (i < nums.length) {
        min = min > nums[i] ? nums[i] : min
        i++
    }
    return min
};

// 二分法再做一遍