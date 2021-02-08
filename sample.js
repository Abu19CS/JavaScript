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
    var mat = [], result = [];
    for (let i = 1; i <= r; i++) {
        mat.push (lines[i].split (' '));
    }

    console.log ('Output :');
    for (let i = 0; i < r-1; i++) {
        result.push (mat[i][0]);
    }
    result.push (...mat[r-1].map (Number))
    for (let i = r-2; i >= 0; i--) {
        result.push (mat[i][c-1]);
    }
    for (let i = 1; i < c-1; i++) {
        result.push (mat[0][i]);
    }
    console.log (result.join(' '));
});

/*
4 4
1 2 3 4
5 4 2 4
8 9 7 1
5 6 3 4

5 4
5 6 8 9
1 5 8 7
3 6 9 8
0 5 8 9
9 8 6 2
*/
