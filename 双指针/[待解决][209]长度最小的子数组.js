/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0
    let start = 0
    let end = 0
    let min = nums.length + 1
    while(end < nums.length) {
        sum += nums[end]
        end++
        while(sum >= target) {
            min = min < end - start ? min : end - start
            sum -= nums[start]
            start++
        }
    }
    return min > nums.length ? 0 : min
};

let r = minSubArrayLen(7, [2,3,1,2,4,3,1])
// let r = minSubArrayLen(11, [1,1,1,1,1,1,1,1])
console.log(r)