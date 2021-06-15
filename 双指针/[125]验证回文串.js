/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 0) return true
    s = s.replace(/[^\da-zA-Z]+/g, '')
    let start = 0, end = s.length - 1
    while (start < end) {
        if (s[start].toLocaleUpperCase() !== s[end].toLocaleUpperCase()) {
            return false
        }
        start++
        end--
    }
    return true
};

let r = isPalindrome('race a car')
console.log(r)