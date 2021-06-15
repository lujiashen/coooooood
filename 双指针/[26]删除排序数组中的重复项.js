/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let start = 0, end = 1;
    if (nums.length === 0) return []
    while (end < nums.length) {
        if (nums[start] !== nums[end]) {
            nums[start + 1] = nums[end]
            start++
        } 
        end++;
    }
    console.log(nums)
    return start + 1
};

let r = removeDuplicates([0,0,1,1,1,2,2,3,3,4])
console.log(r)