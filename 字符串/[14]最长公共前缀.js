/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str = strs[0]
    let result = ''
    if (!strs.length) return ''
    for (let j = 0; j < str.length; j++) {
        for (let i = 1; i < strs.length; i++) {
            if (str[j] !== strs[i][j]) return result
        }
        result += str[j]
    }
    return result
};

let r = longestCommonPrefix(["flower","flow","flight"])
console.log(r)