
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let i = 0; i < s.length; i++) {
        let start = i, end = s.length - 1 - i;
        console.log(start, end)
        if (start < end) {
            [s[start], s[end]] = [s[end], s[start]];
        }
    }
    return s
};
let r = reverseString(["h","e", "l", "l","o"])
console.log(r)