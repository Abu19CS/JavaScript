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
    const [r, c] = lines[0].split (' ').map (Number);
    var mat = [];
    for (let i = 1; i <= r; i++) {
        mat.push (lines[i].split (' '));
    }
    let leftToRight = true;
    console.log ('Output :');
    for (let i = r-1; i >= 0; i--) {
        if (leftToRight) {
            console.log (mat[i].join(' '));
        }else console.log (mat[i].reverse().join(' '));
        leftToRight = !leftToRight;
    }
});

/*
4
1 2 3 4
5 4 2 4
8 9 7 1
5 6 3 4
*/
