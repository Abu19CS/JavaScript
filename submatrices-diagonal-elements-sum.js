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
    const [r, c] = lines[0].split(' ').map(Number);
    var mat = [];
    for (let i = 1; i <= r; i++) {
        mat.push (lines[i].split(' ').map(Number));
    }
    var n = +lines[r+1];
    var diag = [], m = 1;
    const cornerSum = function (sub) {
        let s =0;
        for (let i = 0; i < sub.length; i++)
        {
            for (let j = 0; j < sub.length; j++)
            {
                if ((i == j || (i+j) == n-1 && !(i == Math.floor(n/2) && i == Math.floor(n/2))) && n % 2 != 0) {
                    s += sub[i][j];
                }
                else if ((i == j || (i+j == n-1)) && n % 2 == 0) {
                    s += sub[i][j];
                }
                
            }
        }
        return s;
    } 

    for (let i = 0; i < r; i+=n)
    {
        let t = n;
        if (Math.abs (r-i) >= n) {
            for (let j = 0; j < c; j+=n)
            {
                if (Math.abs (c-j) >= n) {
                    let s = [], row = i;
                    for (let k = 0; k < n; k++)
                    {
                        s.push (mat[row].slice(j, t));
                        row++;
                    }
                    t+=n;
                    diag.push (cornerSum (s));
                }
                
            }
        }
        
    }
    console.log (diag);
});

/**
6 6
6 3 6 3 2 1
4 5 7 1 3 8
6 9 8 4 3 2
4 1 8 8 9 1
8 1 5 7 9 0
1 0 6 9 2 1
3


5 6
6 3 6 3 2 1
4 5 7 1 3 8
6 9 8 4 3 2
4 1 8 8 9 1
8 1 5 7 9 0
3


6 3 6 3
4 5 7 1
6 9 8 4
4 1 8 8
*/