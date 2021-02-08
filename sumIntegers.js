const readline = require('readline');
const process = require('process');
const reader = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
    terminal : true,
});

var lines = [];

reader.on ('line', (input) => {
    lines.push (input);
});

reader.on ('close', function () {
    const n = +lines[0];
    var a = lines[1].split(' ').map(Number);
    var t = +lines[2], f = a.indexOf(t), l = a.lastIndexOf(t);
    var result = [];
    for (let i = f+1; i < l; i++) {
        result.push (a[i]);
    }
    
    if (result.length) {
        console.log (result.sort ((a, b) => {
            return a - b;
        }).join (' '));
    }
    else console.log (-1);
});

/*
7
3 2 4 5 4 8 4
4

4 5 8


5
1 8 2 3 4
8

-1


8
39 11 38 36 29 49 11 16
11

29 36 38 49
*/
