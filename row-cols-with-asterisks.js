var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

var lines = [];

reader.on('line', function (line) {
    lines.push(line);
});

reader.on('close', function () {
    
    var n = +lines[0];
    var mat = [], clone = [];
    for (let i = 1; i <= n; i++) {
        mat.push (lines[i].split(' '));
        clone.push (lines[i].split(' '));
    }
    var q = [];
    for (let s = n+2; s < lines.length; s++) {
        q.push (lines[s].split(' ').map (Number));
    }

    for (let i = 0; i < q.length; i++) 
    {
        var [x, y] = q[i];
        for (let j = x-1; j <= y-1; j++)
        {
            // for cols
            for (let k = 0; k < mat.length; k++)
            {
                if (mat[j][k] == '*') {
                    mat[j][k] = clone[j][k];
                }
                else mat[j][k]  = '*';
            }
            
            //for rows
            for (let v = 0; v < mat.length; v++) {
                if (mat[v][j] == '*') {
                    mat[v][j] = clone[v][j];
                }else mat[v][j] = '*';
            }
        }
    }

    for (let i = 0; i < mat.length; i++) {
        console.log (...mat[i]);
    }
});

/**
7
x d x r j x x
a f f w x t h
u k b m g x p
g o u d t r w
c z w p q r g
w c o m u k u
f g q o r t h
2
2 3
5 7

4
a h u C
s w l i
C a Q w
M Y E h
3
1 1
4 4
4 1
 */