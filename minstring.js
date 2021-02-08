// Smallest Integer – String: 
// The program must accept N string values containing words and integers as the input. 
// The program must print the smallest integer in each string as the output. If there is no integer, the program must print -1 as the output.

// Boundary Condition(s):
// 1 <= N <= 50
// 2 <= Length of each string <= 100
// 1 <= Each integer value <= 10^8

// Input Format:
// The first line contains N.
// The next N lines, each contains a string.

// Output Format:
// The first N lines, each contains the smallest integer in the string or -1.

// Example Input/ Output  1:
// Input:
// 3
// This is alpha 89830 beta 90 and gamma 901
// I am 12 years old
// Hii everyone

// Output:
// 90
// 12
// -1

// Explanation:
// There are 3 integers in the 1st string 89830, 90 and 901. So the smallest integer 90 is printed in the 1st line.
// There is only 1 integer in the 2nd string 12. So the integer 12 is printed in the 2nd line.There is no integer in the 3rd string. 
// So -1 is printed in the 3rd line.

// Example Input/ Output  2:
// Input:
// 5
// Hiii this 43093 is my number 43094
// i am 34 a 67 robot 23
// My marks are 45 89 90
// Hello everyone
// Flower is beautiful 7

// Output:
// 43093
// 23
// 45
// -1
// 7

const readline = require('readline');
const process = require('process');
const reader = readline.createInterface ({
    input: process.stdin, 
    output: process.stdout,
    terminal: true,
});

var lines = [];

reader.on ('line', (input) => {
    lines.push (input);
});

reader.on ('close', function () {
    var n = +lines[0];
    var nString = [];
    for (let i = 1; i <= n; i++) {
        nString.push (lines[i]);
    }
    for (const str of nString) {
        var a = str.split(' ').filter (val => +val).map (Number);
        if (a.length) {
            min = Math.min (...a);
            console.log (min);
        }else console.log (-1);
    }
});

/*
Sample/Input 1:
3
This is alpha 89830 beta 90 and gamma 901
I am 12 year old
Hii everyone

90
12
-1

Sample/Input 2:
5
Hiii this 43093 is my number 43094
i am 34 a 67 robot 23
My marks are 45 89 90
Hello everyone
Flower is beautiful 7

43093
23
45
-1
7

Sample/Input 3:
10
Hiii this is my number 43094039
i am a robot
My marks are 45 89 90
Hello everyone
mdldkl 900 78
hkjl 980
nkl kl
fk 483940 898
hkl
nmnk 80909 567

43094039
-1
45
-1
78
980
-1
898
-1
567
*/
