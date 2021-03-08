var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

var lines = [];

reader.on('line', (line) => {
    lines.push(line);
});

reader.on('close', function () {
    // Start here
    const [r, c] = lines[0].trim().split(' ').map(Number);
    var mat = [];
    for (let i = 1; i <= r; i++) {
        mat.push (lines[i].trim().split(' ').map(Number));
    }
    var t = +lines[r+1], east, te;
    
    for (const row of mat) {
        if (row.includes (1)) {
            east = 1;
            ind = row.indexOf(1);
            te = ind;
        }
        else if (row.includes(2)) {
            east = -1;
            ind = row.indexOf(2)
            te = ind;
        }
        for (let i = 1; i <= t; i++) {
            if (ind == c-1) 
                east = -1;
            else if (ind == 0) 
                east = 1;
            ind += east;
        }
        [row[ind], row[te]] = [row[te], row[ind]];
        console.log (...row);
    }
});


/**
5 6
0 0 0 0 1 0
0 0 2 0 0 0
0 0 0 2 0 0
1 0 0 0 0 0
0 0 0 0 0 2
3
 */