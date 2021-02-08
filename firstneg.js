const readline = require('readline');
const process = require('process');
const reader = readline.createInterface ({
    input: process.stdin, 
    output: process.stdout,
    terminal: true,
});

var lines = [];

reader.on ('line', (input) => {
    lines.push (input);
});

reader.on ('close', function () {
    var c = 1;
    var t = +lines[0];
    
    while (t !== 0) {
        var n = +lines[c++];
        var even = [];
        for (let i = 1; i <= n; i++) {
            if (i % 2 == 0) {
                even.push (i);
            }
        }
        t -= 1;
    }
});


/*

1
6
1 2 3 4 7 9
0 1 2 1 1 4
2
5
4

1 2 3 4 5 6 7 8 9

-> 2 4 6 8
-> 4 8
-> 8

*/