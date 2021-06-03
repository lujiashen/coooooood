/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length === 0) return nums
    let slow = 0, fast = 0
    while (fast <= nums.length - 1) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};

let r = removeElement([], 2)
console.log(r)