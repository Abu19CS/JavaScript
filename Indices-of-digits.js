// Indices of Digits - Integer Series
// The program must accept two integers N and K as the input.The program must form a string by
// concatenating the integers from 0 to N. Then the program must find all the occurence of K in
// the string. Finally, the program must print the indices of all the digits of each occurence of
// K in the string S in seperate lines as the output.

// Boudary Condition (s):
// 1 <= K <= N <= 10^5

// Input Format:
// The first line contains N and K seperated by space.

// Output Format:
// The lines contain the indices of all the digits of each occurence of K in the string S.

/**
Example Input/Output 1:

Input:
20 12

Output:
1 2
14 15

Explanation:
Here N = 20 and K = 12
The string formed using the integers from 0 to 20 is "01234567891011121314151617181920"
There are two occurences of 12 in the string.
The indices of the first occurence of 12 are 1 and 2.
The indices of the second occurence of 12 are 14 and 15.

Hence the output is
1 2 
14 15.

Example Input/Output 2:

Input:
105 101

Output:
10 11 12 
193 194 195

Example Input/Output 3:

Input:
120 11

Output:
12 13 
13 14 
195 196
220 221 
223 224
224 225
225 226
226 227
229 230
232 233
235 236
238 239
241 242
244 245 
247 248
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
    var str = '', s;
    var [N, K] = lines[0].split(' ').map(Number);
    for (let i = 0; i <= N; i++) {
        str += i;
    }
    s = String(K);
    var pos = str.indexOf(s);
    while (pos !== -1) {
        var sdigits = '';
        for (let i = 0; i < s.length; i++) {
            sdigits += (pos + i) + ' ';
        }
        console.log(sdigits);
        pos = str.indexOf(s, pos+1);
    }
});