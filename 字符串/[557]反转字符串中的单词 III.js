/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let start = 0, end = 0
    let r = ''
    while (end < s.length) {
        if (s[end] === ' ') {
            for (let i = end - 1; i >= start; i--) {
                r += s[i]
            }
            r += s[end]
            start = end + 1
        }
        end++
    }
    if (end === s.length) {
        for (let i = s.length - 1; i >= start; i--) {
            r += s[i]
        }
    }
    console.log(r)
};

reverseWords("Let's take LeetCode contest")