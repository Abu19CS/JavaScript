const readline = require('readline');
const process  = require('process');
const reader = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
    terminal : true,
});

var lines = [];

reader.on ('line', (input) => {
    lines.push (input);
});

const main = function () {
    const prompt = require ('prompt-sync')();

    var str = lines[0], len = [], max, ind, splitstr = [];

    for (let i = 0; i < str.length-1; i++) {
        var s1 = str.slice(0, i+1), s2 = str.slice(i+1, str.length);
        splitstr.push((s1.concat(' ', s2)));
        len.push (+zeroOne (s1, s2));
    }

    function zeroOne (s1, s2) {
        let z = 0, o = 0;
        for (const v of s1) {
            if (v == '0') z++;
        }
        for (const v of s2) {
            if (v == '1') o++;
        }
        return String (z) + String (o);
    }

    max = Math.max.apply(this.len, len);
    ind = len.findIndex ((e, i) => e == max);

    console.log (splitstr[ind]);
}

reader.on ('close', main);

/*
Input/Output 1:
11111111111111111111111111111111111

1 1111111111111111111111111111111111

Input/Output 2:
001110111

001110 111

Input/Output 3:    
101010

1010 10
*/