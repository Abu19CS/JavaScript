const readline = require('readline');
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
    var d = +lines[0], printed = 0;
    var dLives = lines[1].split(' ').map (Number);
    var b = +lines[2];
    var bLives = lines[3].split(' ').map (Number);
    for (let i = 0; i < bLives.length; i++) {
        var value = bLives[i];
        for (let j = 0; j < dLives.length; j++) {
            dLives[j] = dLives[j] - value;
        }
        var r = dLives.some(e => e < 0);
        if (r) {
            console.log ('Game Over');
            printed = 1;
            break;
        }
        console.log (dLives.join(' '));
    }if (printed === 0) {
        console.log ('Game Over');
    }
})

/*

5
6 5 5 6 5
4
3 1 1 1

3 2 2 3 2
2 1 1 2 1
1 0 0 1 0
Game Over


4
3 5 3 3
3
1 1 1

2 4 2 2
1 3 1 1
0 2 0 0
Game Over

6
7 7 6 9 8 5
6
3 1 3 8 2 9

4 4 3 6 5 2
3 3 2 5 4 1
Game Over
*/