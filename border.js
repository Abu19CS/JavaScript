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

    console.log ('Output :');
    console.log (mat[0].join(' '));
    for (let i = 1; i <= r-2; i++) {
        let sub = [];
        for (let j = 0; j < c; j++) {
            if (j == 0 || j == c-1) {
                sub.push (mat[i][j]);
            }else sub.push ("*");
        }
        console.log (sub.join(' '));
    }
    console.log (mat[r-1].join (' '));
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
