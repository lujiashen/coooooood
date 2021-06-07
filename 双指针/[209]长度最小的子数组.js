/**
 * @param {number} target（大于等于target）
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let start = 0, end = 0, sum = 0
    let min = nums.length
    if (nums.reduce((a, b) => a + b, 0) < target) return 0
    while (end < nums.length) {
        sum += nums[end]
        // if (sum >= target) {
        //     min = min > end - start + 1 ? end - start + 1 : min
        //     end = start
        //     sum = 0
        //     start++
        // }
        while (sum >= target) {
            min = Math.min(end - start + 1, min)
            sum -= nums[start]
            start++
        }
        end++
    }
    return min
};

let r = minSubArrayLen(7, [2,3,1,2,4,3])
// let r = minSubArrayLen(11, [1,2,3,4,5])
// let r = minSubArrayLen(15, [1, 2, 3, 4, 5])
console.log(r)