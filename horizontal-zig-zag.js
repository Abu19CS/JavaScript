// Horizontal Zig-Zag Multiples Pattern:
// The program must accept an integer N as the input. The program must print the first N*N multiples of the integer N in horizontal zig-zag fashion based
// the following conditions,

//     -In the 1st line, the first N multiples of N must be printed in ascending order.
//     -In the 2nd line, the next N multiples of N must be printed in descending order. 
//     -In the 3rd line, the next N multiples of N must be printed in ascending order.
//     -In the 4th line, the next N multiples of N must be printed in descending order. 
//     - Similarly, the remaining multiples of N are printed in the remaining lines

/*
Boundary Condition(s):
2 <= N <= 50

Input Format:
The first line contains N.

Output Format:
The first N lines, each contains N integers separated by a space.

Example Input/Output 1:
Input

5
Output:

5 10 15 20 25 
50 45 40 35 30
55 60 65 70 75
100 95 90 85 80
105 110 115 120 125

Explanation
Here N=5
The number of lines to be printed is 5.

In the 1st line, the first 5 multiples of 5 are printed in ascending order. 
5 10 15 20 25
In the 2nd line, the next 5 multiples of 5 are printed in descending order.
50 45 40 35 30
In the 3rd line, the next 5 multiples of 5 are printed in ascending order.
55 60 65 70 75
In the 4th line, the next 5 multiples of 5 are printed in descending order.
100 95 90 85 80
In the 5th line, the next 5 multiples of 5 are printed in ascending order.
105 110 115 120 125

Example Input/0utput 2:
Input:
3

Output:
3 6 9
18 15 12
21 24 27

*/
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
    var n = +lines[0], mul = 1, c = 1;
    for (let i = 1; i <= n; i++)
    {
        var subArr = [];
        if (c % 2 !== 0) {
            for (let j = 1; j <= n; j++){
                subArr.push (n * mul);
                mul++;
            }
            console.log (subArr.join(' '));
            c++;
        }
        else 
        {
            for (let j = 1; j <= n; j++){
                subArr.push (n * mul);
                mul++;
            }
            console.log (subArr.reverse().join(' '));
            c++;
        }
    }
});