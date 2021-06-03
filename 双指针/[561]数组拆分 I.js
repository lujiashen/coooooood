/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let r = 0
    nums = nums.sort((a, b) => a - b)
    for(let i = 0; i < nums.length; i+=2) {
        r += nums[i]
    }
    return r
};
let r = arrayPairSum([6,2,6,5,1,2])
console.log(r)