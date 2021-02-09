// Zig-Zag Swap - Columns

// The program must accept an input matrix of size RxC as the input. The program must modify the matrix by swaping
// the coloumns in zig-zag fashion based on the following condition.
//     -The first half of the 1st column must be swapped with the second of the Cth column. 
//     -The second half of the 2nd column must be swapped with the first half of the (C-1)th column. 
//     -The first half of the 3rd column must be swapped with the second half of the (C-2)th column. 
//     -The second half of the 4th column must be swapped with the first half of the (C-3)th column. 
//     -Similarly, the program must swap the remaining columns til (C/2)th column in the matrix. 
// Finally, the program must print the modified matrix as the output;
// Note: The values of R and C are always event.

// Sample/Input: 1
// 6 6
// 86 87 66 39 51 28
// 18 21 62 34 69 89
// 76 82 35 73 81 86
// 56 61 36 17 22 53
// 33 32 71 33 45 31
// 49 42 17 28 60 10

// 53 87 17 39 61 28
// 31 21 33 34 32 89
// 10 82 28 73 42 86
// 56 51 36 66 22 86
// 33 69 71 62 45 18
// 49 81 17 35 60 76

// Sample/Input: 2
// 8 4
// 49 82 82 86
// 63 58 42 12
// 67 32 88 52
// 55 85 25 15
// 53 68 32 82
// 67 55 41 15
// 18 39 47 19
// 61 33 12 89

// 82 82 68 86
// 15 58 55 12
// 19 32 39 52
// 89 85 33 15
// 53 82 32 49
// 67 42 41 63
// 18 88 47 67
// 61 25 12 55

// Sample/Input: 3
// 4 10
// 79 49 67 85 90 85 87 19 73 85
// 10 35 11 43 50 26 17 60 69 10
// 54 66 35 42 42 40 76 40 45 34
// 54 80 27 90 11 42 36 32 28 17

// 34 49 40 85 40 85 42 19 66 85
// 17 35 32 43 42 26 90 60 80 10
// 54 73 35 87 42 90 76 67 45 79
// 54 69 27 17 11 50 36 11 28 10

// Sample/Input: 4
// 2 2
// 1 2
// 3 4

// 4 2
// 3 1

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
    const [r, c] = lines[0].trim().split(' ').map (val => +val);
    var mat = [];
    for (let i = 1; i <= r; i++) {
        mat.push (lines[i].trim().split(' ').map (Number));
    }
    var y = c-1;
    for (let i = 0; i < c/2; i++) {
        if (i % 2 == 0) {
            let k = 0;
            for (let j = r/2; j <= r-1; j++) {
                let t = mat[k][i];
                mat[k][i] = mat[j][y];
                mat[j][y] = t;
                k++;
            }y--;
        }
        else {
            let k = r/2;
            for (let j = 0; j < r/2; j++) {
                let t = mat[k][i];
                mat[k][i] = mat[j][y];
                mat[j][y] = t;
                k++;
            }
            y--;
        }
    }
    console.log ('Output :\n');

    for (const row of mat) {
        console.log (row.join(' '));
    }
});
