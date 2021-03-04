const readline = require('readline');
const process = require('process');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});

var lines = [];

reader.on ('line', (input) => {
    lines.push (input);
});

reader.on ('close', function () {
    var n = +lines[0], t = n, c = 1;
    var k = String (t).charAt (0) + String (t).charAt (String(t).length-1);
    if (t % (+k) === 0) {
        console.log (t);
        process.exit (1);
    }

    else {
        while (1) {
            var v = t+1, prev = n-c;
            var f = String(v).charAt (0) + String(v).charAt (String (prev).length-1);
            var prevC = String (prev).charAt (0) + String(prev).charAt (String(prev).length-1);

            if (prev % (+prevC) === 0) {
                console.log (prev);
                process.exit (1);
            }
            else if (v % (+f) === 0) {
                console.log (v);
                process.exit (1);
            }
            else {
                t++;
                c++;
            }
        }
    }    
});