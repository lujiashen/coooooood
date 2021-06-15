/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let start = 0, end = s.length - 1
    let arr1 = [...s]
    while (start < end) {
        if (!arr.includes(s[start])) {
            start++
            continue
        } else if(!arr.includes(s[end])) {
            end--
            continue
        }
        [arr1[start], arr1[end]] = [arr1[end], arr1[start]]
        start++
        end--
    }
    return arr1.join("")
};

let r = reverseVowels("hello")
// "hello"
// "leotcede"
// "Slang is not suet, is it? Euston signals."
console.log(r)