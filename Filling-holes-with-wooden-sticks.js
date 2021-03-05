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
    const [r, c] = lines[0].trim().split(' ').map (Number);
    var mat = [];
    for (let i = 1; i <= r; i++) {
        mat.push (lines[i].trim().split(' '));
    }
    var n = +lines[r+1];
    var stricks = lines[r+2].trim().split(' ').map (Number);
    for (let i = 0; i < c; i++) 
    {
        let depth = 0;
        for (let j = 0; j < r; j++)
        {
            if (mat[j][i] == '*') depth++;
        }
        if (stricks.includes (depth)) {
            stricks.splice(stricks.indexOf(depth), 1);
            for (let k = 0; k < depth; k++) {
                mat[k][i] = '#';
            }
        }
    }
    
    for (const row of mat) {
        console.log (row.join(' '));
    }
    if (stricks.length) {
        console.log (stricks.join(' '));
    }
    else console.log (-1);
});


/**
7 5
# * # * *
# * # * *
# * # # *
# * # # *
# # # # *
# # # # *
# # # # # 
6
2 3 4 5 6 7


# # # # #
# # # # #
# # # # #
# # # # #
# # # # #
# # # # #
# # # # #
3 5 7

4 10
# * # * # * # * * *
# * # * # * # # # #
# * # * # * # # # #
# # # # # * # # # #
7
1 1 3 1 2 4 1

# # # * # # # # # #
# # # * # # # # # #
# # # * # # # # # #
# # # # # # # # # #
2 1


6 4
* # * #
* # * # 
* # * #
# # * # 
# # * # 
# # # # 
1
3

# # * #
# # * #
# # * #
# # * #
# # * #
# # # #
-1
**/