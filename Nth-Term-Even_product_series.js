const readline = require('readline');
const reader = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});

var lines =[];

reader.on ('line', (input) => {
    lines.push (input);
});

reader.on ('close', function () {
    var [N, X] = lines[0].split(' ');
    var res = 1, k = 2;
    for (let i = 1; i <= N; i++) {
        res = res * k;
        if (res > X) {
            res = Math.abs (res-X);
        }
        k+=2;
    }console.log (res);
});