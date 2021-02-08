const prompt = require ('prompt-sync')();

const str = prompt(), k = +prompt();
var s = 4, result = [];

for (let i = 0; i < str.length; i++) {
    var val = +str.slice (i, s);
    if (val % k === 0 && String (val).length === 4) {
        result.push (val);
    }
    s++;
}
console.log (result.length);


/*

Input :
4287452036
5

Output :
2

Input:
53200180
12

Output:
0
Input:
1010010001000010000010000001
10

Output:
5
*/