// Library Books & Requests: 
// In a library books are  kept on a shelf. The books are numbered 1 to B and are arranged from left to right on the shelf. If a student wants to 
// read a book (using the book number), the book can be taken from the shelf and it must be inserted to the left when the student returns the book.
// The program must accept N integers representing the requests of N students and value of B as the input. For each request, the program must print
// the position of the requested book in the shelf as the output.
// Note: Assume that each request is processed only after returning the book of the previous request.

// Boundary Condition (s):
// 1 <= N, B <= 1000
// 1 <= Each Integer value <= B

// Input format :
// The first line contains N.
// The second the contains the N integers seperated by space.
// The third line contains B.

// Output format :
// The first line contains the N integers seperated by space denoting the positions of the book in the shelf.

/**
Example Input/Output 1:
Input:
4
2 3 1 3
5

Output:
2 3 3 2

Explanation:
Initialy, the 5 books are arranged as 1 2 3 4 5.
The 1st student requests the book 2 which is present at the position 2. So 2 is printed.
Now the 5 books are rearranged as 2 1 3 4 5.
The 2nd student request the book 3 which is present at the position 3. So 3 is printed.
Now the 5 books are rearranged as 3 2 1 4 5.
The 3rd student requests the book 1 which is present at the position 3. So 3 is printed.
Now the 5 books are rearranged as 1 3 2 4 5.
The 4th student requests the book 3 which is present at the position 2. So 2 is printed.
Now the 5 books are rearranged as 3 1 2 4 5.

Example Input/Output 2:
Input:
8
7 9 10 6 8 3 2 7
10

Output:
7 9 10 9 10 8 8 7
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
    var n = +lines[0];
    var ar = lines[1].split(' ').map (Number);
    var B = [];
    for (let i = 1; i <= +lines[2]; i++) {
        B.push (i);
    }
    var res = [];
    for (let i = 0; i < ar.length; i++) {
        ind = B.indexOf (ar[i]);
        res.push (ind+1);
        v = B.splice (ind, 1);
        B.unshift (...v);
    }
    console.log (res.join(' '));
});