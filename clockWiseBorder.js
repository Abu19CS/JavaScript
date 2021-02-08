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
    var result = [];
    for (const val of mat[0]) {
        result.push (val);
    }
    for (let i = 1; i <= r-2; i++) {
        result.push (mat[i][c-1]);
    }
    for (const val of mat[r-1].reverse()) {
        result.push (val);
    }
    for (let i = r-2; i >= 1; i--) {
        result.push (mat[i][0]);
    }
    console.log (result.join(' '));
});

/*
4 4
1 2 3 4
5 4 2 4
8 9 7 1
5 6 3 4
*/
