/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var length = nums.length, left = 0;
    var right = length - 1;
    while(left <= right) {
        if (target > nums[left] && target < nums[right]) {
            left++
            right--
        } else {
            if (target === nums[left]) {
                return left
            } else if (target === nums[right]) {
                return right
            } else {
                return -1
            }
        }
    }
};

let r = search([-1,0,3,5,9], 3)
console.log(r)