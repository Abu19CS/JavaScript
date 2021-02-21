// Alphabets Range - Circular Fashion:
// The program must accept an string S containing only lower case alphabets as the input. The program must print all the alphabets between every 
// two alphabets (both inclusive) in the string S as the output.The english alphabet set is considered in a cyclic fashion to print the 
// alphabets from one alphabets to another.

// Boundary Condition (s):
// 2 <= Length of S <= 100

// Input format:
// The first line contain the S.

// Output format:
// The first line contains a string as per the given condition.

/**
Example Input/Output 1:
Input:
aepd

Output:
abcdeefghijklmnoppqrstuvwxyzabcd

Explanation :
Here S = aepd
The alphabets between a to e are a b c d e (a and e are inclusive)
The alphabets between e to p are e f g h i j k l m n o p (e and p are inclusive).
The alphabets between p to d are p q r s t u v w x y z a b c d (p and d are inclusive).
So the output is abcdeefghijklmnoppqrstuvwxyzabcd is printed as the output.

Example Input/Output 2:

Input:
apple

Output:
abcdefghijklmnopppqrstuvwxyzabcdefghijkllmnopqrstuvwxyzabcde

Example Input/Output 3:

Input:
aabbaa

Output:
aabbbcdefghijklmnopqrstuvwxyzaa
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
    var s = lines[0].trim();
    var alphabets = 'abcdefghijklmnopqrstuvwxyz';
    var results = [];
    for (let i = 0; i < s.length-1; i++) {
        var start = i, end = i+1;
        if (alphabets.indexOf(s.charAt(start)) == alphabets.indexOf(s.charAt(end))) {
            results.push (s.charAt(start));
        }
        else if (alphabets.indexOf(s.charAt(start)) < alphabets.indexOf(s.charAt(end))) {
            for (let j = alphabets.indexOf(s.charAt(start)); j <= alphabets.indexOf(s.charAt(end)); j++)
            {
                results.push (alphabets.charAt(j));
            }
        }
        else {
            var startIndex = alphabets.indexOf(s.charAt(start)),
            endIndex = alphabets.indexOf(s.charAt(end));
            results.push(...alphabets.slice(startIndex));
            results.push (...alphabets.slice(0, endIndex + 1));
        }
    }
    console.log (results.join(''));
});