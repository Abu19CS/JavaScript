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

3
This is alpha 89830 beta 90 and gamma 901
I am 12 year old
Hii everyone

90
12
-1


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