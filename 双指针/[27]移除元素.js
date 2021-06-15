/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length === 0) return nums
    let left = 0, right = 0
    while (right < nums.length) {
        if (nums[right] !== val) {
            nums[left] = nums[right]
            left++
        }
        right++
    }
    return left
};

let r = removeElement([3,2,2,3], 3)
console.log(r)