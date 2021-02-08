const prompt = require ('prompt-sync')();

const n = +prompt();
var a = prompt().split(' ').map (val => +val);
var k = +prompt();

for (let i = 0; i < k; i++) {
    let f = a[0], s = a[1], r;
    if (f < s) {
        r = a.splice (0, 1);
        a.push (...r);
    }
    else {
        r = a.splice(1, 1);
        a.push (...r);
    }
}

console.log (a.join(' '));

/*

5
29 60 84 26 50
4

*/