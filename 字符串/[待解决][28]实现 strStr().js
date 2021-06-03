/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') return 0
    if (haystack === '') return -1
    if (haystack.indexOf(needle[0]) === -1) return -1
    if (haystack === needle) return 0
    let arr = []
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let s = haystack.slice(i, haystack.length)
            console.log(s)
            if (s === needle) return i
            let result = ''
            if (s.length > needle.length) {
                for (let k = 0; k < s.length; k++) {
                    if (needle[k] && s[k] === needle[k]) {
                        result += needle[k]
                    }
                }
                console.log(result)
                if (result === needle) {
                    return i
                }
            }
        }
    }
    return -1
};
let r = strStr("abc", "c")
console.log(r)