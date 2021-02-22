// Sort Integers based on Alphabets:
// The program must accept N string values as the input. Each string value represents an integer and it contains a lower case alphabet. The 
// Program must sort the integers based on the embedded lower case alphabet in alphabetical order. If two or more integer have the same alphabet
// the program must sort those integers in ascending order. Finally, the program must print N sorted integers as the output.

// Boundary Condition(s):
// 1 <= N <= 100
// 1 <= Each integer value <= 10^8

// Input format:
// The first line contains N.
// The second line contains N string values seperated by space.

// Output format:
// The first line contains N integers seperated by space.

/**
Example Input/Output 1:

Input:
5
10c 34b93 4c33 54a2 f4478

Output:
542 3493 10 433 4478

Explanation:
The given integers are 10(c) 3493(b), 433(c), 542(a) and 4478(f).
After sorting the integers based on the given conditions, the integers
become 542 3493 10 433 4478
So it is printed as the output.

Example Input/Output 2:

Input:
4
11c 55c5 c4 3c9

Output:
4 11 39 555
**/
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
    var N = +lines[0];
    var str = lines[1].split(' ');
    var obj = {
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

    for (const word of str) {
        var num = [], char;
        for (var val of word) {
            if (!isNaN(+val)) 
                num.push(val);
            else char = val;
        }obj[char].push(+num.join(''));
    }

    var result = [];
    for (const prop in obj) {
        if (obj[prop].length !== 0) {
            result.push(...obj[prop].sort((a, b) => a - b));
        }
    }
    console.log (result.join(' '));
});