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
    var n = +lines[0],
    ar = lines[1].split(' ').map (Number);

    const sum = function (n) {
        let c = 0;
        while (n != 0) {
            c += n % 10;
            n = Math.floor (n/10);
        }return c;
    };
    var sumArr = [];
    for (let i = 0; i < n; i++) {
        var s = sum (ar[i]), subArr = [];
        for (let j = i+1; j < n; j++) {
            var s2 = sum (ar[j]);
            if (s === s2) {
                subArr.push (ar[i] + ar[j]);
            }
        }
        if (subArr.length)
        sumArr.push(...subArr);
    }
    if (sumArr.length) {
        console.log (Math.max(...sumArr));
    }else console.log (-1);
});

/*

4
15 81 24 36


5
156 12 49 24 99

*/