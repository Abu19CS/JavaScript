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
    const [r, c] = lines[0].split(' ').map(Number);
    var intMat = [], alphMat = [],
    map = {
        'a' : [],
        'b' : [],
        'c' : [],
        'd' : [],
        'e' : [],
        'f' : [],
        'g' : [],
        'h' : [],
        'i' : [],
        'j' : [],
        'k' : [],
        'l' : [],
        'm' : [],
        'n' : [],
        'o' : [],
        'p' : [],
        'q' : [],
        'r' : [],
        's' : [],
        't' : [],
        'u' : [],
        'v' : [],
        'w' : [],
        'x' : [],
        'y' : [],
        'z' : [],
    };
    for (let i = 1; i <= r; i++) {
        intMat.push (lines[i].split(' ').map(Number));
    }
    for (let i = r+1; i <= (r+r); i++) {
        alphMat.push (lines[i].split(' '));
    }
    var alphabets = [], num = [];
    for (const row of alphMat) {
        alphabets.push (...row);
    }
    for (const row of intMat) {
        num.push (...row);
    }
    alphabets.sort();
    for (let i = 0; i < alphabets.length; i++) {
        [key, value] = [alphabets[i], num[i]];
        map[key].push (value);
    }
    for (const row of alphMat) {
        var printRow = [];
        for (let i = 0; i < row.length; i++) {
            let key = row[i];
            if (map[key].length > 1) {
                val = map[key].shift();
                printRow.push (val);
            }
            else printRow.push (...map[key]);
        }console.log (...printRow);
    }
});


/**
4 4
66 58 42 85
41 24 69 59
80 67 50 89
23 17 11 82
j y g e
v w i b
l f c p
e n n r


59 82 24 42
17 11 69 66
80 41 58 89
85 67 50 23


6 8
75 40 69 25 21 49 71 99
45 56 81 55 96 60 89 53
32 11 10 61 11 84 73 49
15 75 22 75 14 65 63 72
45 36 48 95 75 10 97 99
34 14 63 72 80 71 11 69
z p w v x y a u
n e d l z v h g
a y e y i t d y
q a f i d c t f
e j t f t s f v
b p d z i d t y


71 75 97 95 99 34 75 48
15 81 49 49 11 75 10 11
40 14 55 63 61 65 71 72
75 69 60 11 99 21 63 89
96 73 72 53 45 14 32 10
25 22 45 69 84 56 36 80
**/