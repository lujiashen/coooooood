/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = 0, p2 = 0
    let arr = new Array(m+n)
    while (p1 < m || p2 < n) {
        if (nums1[p1] < nums2[p2]) {
            arr[p1] = nums1[p1]
        } else {
            arr[p1] = nums2[p2]
        }
        p1++
        p2++
    }
    console.log(arr)
};


let r = merge(
    [1,2,3,0,0,0],
    3,
    [2,5,6],
    3
)
