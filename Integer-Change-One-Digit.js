/**
Integer - Change One Digit:

The program must accept two integers N and K as the input. The program must form 10 integers by changing the Kth
digit in the integer N. Then the program must print the 10 integer in sorted order as the 
output.

Note: The value of the K is always less then or equal to the number of digits in N.

Boundary Condition (s):
1 <= N <= 10^8

Input Format:
the first line contains N and K seperated by a space.

Output Format:
The first line contains 10 integers seperated by a space.

Example Input/Output 1:
Input:
1234 2

Ouput:
1034 1134 1234 1334 1434 1534 1634 1734 1834 1934

Explanation:
Here N = 1234 and K = 2.
The 10 integer formed by changing the 2nd digit in 1234 are given below
1034 1134 1234 1334 1434 1534 1634 1734 1834 1934
So these 10 integers are printed in sorted order.

Example Input/Output 2:
Input :
105 1

Output:
5 105 205 305 405 505 605 705 805 905
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
   var [N, K] = lines[0].split(' ');
   var result = [];
   for (let i = 0;  i < 10; i++) {
       var ar = N.split('');
       ar[K-1] = i;
       result.push (ar.join(''));
   }
   console.log (result.sort((a, b) => a-b).map(Number).join(' '));
});