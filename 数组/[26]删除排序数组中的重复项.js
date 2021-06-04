/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let start = 0, end = start + 1, value = nums[start];
    if (nums.length === 0) return []
    while (end < nums.length) {
        if (nums[end] !== value) {
            value = nums[end]
            nums[start + 1] = value
            start++
        } 
        end++;
    }
    console.log(nums)
    return start + 1
};

let r = removeDuplicates([0,0,1,1,1,2,2,3,3,4])
console.log(r)