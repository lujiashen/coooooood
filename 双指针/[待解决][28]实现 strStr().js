/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length === 0) return 0
    let str = ''
    for (let i =0; i < haystack.length; i++) {
        for (let j = 0; j < needle.length; j++)  {
            if (haystack[i] === needle[j]) {
                str += haystack[i]
            }
            console.log(str)
            if (str === needle) {
                console.log(i)
            }
        }
    }
};
let r = strStr("helola", "la")
console.log(r)