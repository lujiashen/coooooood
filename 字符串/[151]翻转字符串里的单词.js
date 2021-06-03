// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseWords = function(s) {
//     s = s.trim()
//     if (s.length === 1) return s
//     s = s.replace(/\s+/g, ' ')
//     let arr = s.split(' ')
//     let r = ''
//     for(let i = arr.length; i >= 0; i--) {
//         if (arr[i]) r += `${arr[i]} `
//     }
//     return r.slice(0, r.length - 1)
// };




// 双指针
var reverseWords = function (s) {
    let r = s.length - 1, l = r, res = "";
    while (l >= 0) {
        //先找到单词的尾部
        while (s[r] === " ") {
            r--;
        }
        l = r;
        //给上次单词加空格，排除第一次
        if (l >= 0 && res) {
            res += " ";
        }
        //再找到单词的头部
        while (s[l] && s[l] !== " ") {
            l--;
        }
        //遍历单词并添加
        for (let i = l + 1, j = r; i <= j; i++) {
            res += s[i];
            console.log(res)
        }
        console.log(l , r)
        //跳到下一个单词
        r = l;
    }
    return res;
};
console.log(reverseWords("  hello world "))