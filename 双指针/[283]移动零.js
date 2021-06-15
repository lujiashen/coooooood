/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let length = nums.length
    if (length === 1) return nums
    let left = 0, right = 0
    while (right < length) {
        if (nums[right]) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }
        right++
    }
    return nums
};
let r = moveZeroes([0,3,0,12,1])
console.log(r)