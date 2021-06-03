/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let left = 0
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            left++
            arr.push(left)
        } else {
            left = 0
        }
    }
    arr = arr.sort((a, b) => a - b)
    return arr.length ? arr[arr.length - 1] : 0
};

var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0, count = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    }
    maxCount = Math.max(maxCount, count);
    return maxCount;
};

let r = findMaxConsecutiveOnes([0, 0])
console.log(r)