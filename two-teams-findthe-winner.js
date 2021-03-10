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
    var n = +(lines[0].trim());
    var map = [];
    for (let i = 1; i <= n; i++) {
        map.push (lines[i].trim().split(' ').map(Number));
    }
    var roundA = 0, roundB = 0, pointsA = 0, pointsB = 0;
    var a, b;
    for (const row of map) {
        [a, b] = row;
        pointsA += a;
        pointsB += b;
        if (a > b) {
            roundA += 1;
        }
        else if (b > a) {
            roundB += 1;
        }
        else if (a == b) {
            roundA += 1;
            roundB += 1;
        }
    }
    if (roundA > roundB) {
        console.log ('Team A');
    }
    else if (roundB > roundA) {
        console.log ('Team B');
    }
    else if (roundA == roundB) {
        if (pointsA > pointsB) {
            console.log ('Team A');
        }
        else if (pointsB > pointsA) {
            console.log ('Team B');
        }
        else if (pointsA == pointsB) {
            [a, b] = map[map.length-1];
            if (a == b) {
                console.log ('TIE');
            }
            else if (a > b) {
                console.log ('Team A');
            }
            else if (b > a) {
                console.log ('Team B');
            }
        }
    }
});
/**
10
18 14
10 17
13 16
15 17
12 11
17 12
11 11
16 10
19 15
11 13


Team A
4
20 15
20 10
10 20
10 20


Team B

3 
5 2
2 5
2 2


TIE
**/