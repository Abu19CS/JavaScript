const prompt = require ('prompt-sync')();

const [n, k] = prompt().split(' ').map (Number);
var a = prompt().split (' ').map (Number);

var str = '0'.padStart (k, '0').split('').map(Number), result;

for (const v of a) {
    toggle (v);
}

function toggle (pos) {
    for (let i = pos-1; i < str.length; i++) {
        if (str[i] == 1) {
            str[i] = 0;
        }
        else if (str[i] == 0) {
            str[i] = 1;
        }
    }
    result = parseInt (str.join(''), 2);
}

console.log (result);