/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (target - numbers[i] === numbers[j]) {
//                 return [i + 1, j + 1]
//             }
//         }
//     }
// };

// 有序数组
var twoSum = function(numbers, target) {
    let i = 0, j = numbers.length - 1;
    while (i < j) {
        let sum = numbers[i] + numbers[j]
        if (sum > target) {
            j--
        } else if (sum < target) {
            i++
        } else {
            return [i + 1, j + 1]
        }
    }
};


let r = twoSum([0,0,3,4], 0)
// let r = twoSum([2,3,4], 6)
console.log(r)
