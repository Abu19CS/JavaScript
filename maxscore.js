const prompt = require ('prompt-sync')();

var str = prompt();
const n = +prompt();
var words = [...prompt().split(' ')], scores = [];

for (const w of words) {
    let s = 0;
    for (let i = 0; i < w.length; i++) {
        s += str.indexOf (w[i]) + 1;
    }
    scores.push (s);
}

console.log (words[scores.indexOf (Math.max(...scores))]);

/*

abcdefghijklmnopqrstuvwxyz
5
pen gold doll coin book

doll
*/