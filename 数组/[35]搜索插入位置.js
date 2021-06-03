/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 相关标签：二分查找
 */
var searchInsert = function(nums, target) {
    let length = nums.length
    let left = 0, right = length - 1
    if (nums.includes(target)) {
        return nums.findIndex(item => item === target)
    } else {
        if (target > nums[right]){
            return length
        }
        if (target < nums[left]) {
            return left
        }
        while(left <= right) {
            if (target > nums[left] && target < nums[right]) {
                left++
            } else {
                return left
            }
        }
    }
};
let r = searchInsert([1, 3], 2)
console.log(r)