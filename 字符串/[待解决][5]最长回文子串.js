/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let val = s[0]
    let arr = s.split()
    let r = []
    for (let i = 1;i < s.length; i++) {
        let str = val + s[i]
        arr.push(str)
        for (let j = 0; j < arr.length; j++) {
            let y = str + j[i]
            arr.push(y)
        }
    }
    return arr
};
console.log(longestPalindrome("babad"))