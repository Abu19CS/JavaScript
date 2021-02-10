// Zig-Zag Triangle - String Pattern 
// The program mut accept a string S and an integer N as the input. The program must 
// print N lines of output based on the following conditions. 

//     -The 1st line contains N-1 asterisks and the first character of S. 
//     -The 2nd line contains N-2 asterisks and the next 3 characters of S.
//     -The 3rd line contains N-3 asterisks and the next 5 characters of S in reverse order.
//     -The 4th line contains N-4 asterisks and the next 7 characters of S.
//     -The 5th line contains N-5 asterisks and the next 9 characters of S in reverse order.
//     -Similarly, the remaining line are printed in the zig-zag order.
//     -If there are no more characters in S when printing lines, the program must print # for those
//     characters.

// Boundary Condition (s):
// 1 <= Length of S <= 1000
// 3 <= N <= 50 

// Input Format :
// The first line contains S.
// The second line contains N.

// Output Format:
// The first N lines, each containing the charactes as per the given condition.

/*
Sample Input/ Output 1:
Input:
skillrack
3

Output:
**s
*kil
*kcarl

Explanation :
S = skillrack
N = 3, so the number of lines to be printed is 3.
In the 1st line, 2 (3-1) asterisks and the first character of S are printed.
In the 2nd line, 1 (3-2) asterisks and the next 3 characters of S are printed.
In the 3rd line, no asterisks (3-3) == 0 and the next 5 characters of S (in reverse order) are printed.

Hence the output is, 
**s
*kill
*kcarl

Sample Input/Output 2:

Input:
Telegram
4

Output:
***T
**ele
*#marg
#######

Sample Input/Output 3:
Input:
Acknowledgemented
3

Output:
**A
*ckn
delwo

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
    var str = lines[0].trim(), N = +lines[1].trim(), c= 1, odd = 0, k = 1, i = 1;
    var  S = str.substr (0, 1);
    console.log (S.padStart (N-k + S.length, '*'));
    k++;
    c+=2;
    for (let j = 1; j < N; j++) {
        if (odd % 2 == 0){
            var s = str.substr(i, c);
            if (s.length == c)
            console.log (s.padStart ((s.length + N-k), '*'));
            else {
                s = s.padStart (c, '#');
                console.log (s.padStart((s.length + N-k), '*'));
            }
            k++;
            odd++;
        }else {
            var s = str.substr(i, c).split('').reverse().join('');
            if (s.length == c)
            console.log (s.padStart ((s.length + N-k), '*'));
            else {
                s = s.padStart (c, '#');
                console.log (s.padStart((s.length + N-k), '*'));
            }
            odd++;
            k++;
        }       
        i+=c
        c+=2;
    }
    
//     if the above code fails in any testCase then probably use the below code
//     var str = lines[0].trim() + '#'.repeat (10000), N = +lines[1].trim(), c= 0;
//     for (let i = 1; i <= N; i++) {
//         if (i == 1 || i % 2 == 0)
//         console.log ('*'.repeat (N-i).concat (str.slice(c, c+(i*2-1))));
//         else 
//         console.log ('*'.repeat (N-i).concat(str.slice(c, c+(i*2-1)).split('').reverse().join('')));
//         c += (i*2-1);
//     }
    
});
