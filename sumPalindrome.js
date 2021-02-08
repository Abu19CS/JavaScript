const readline = require('readline');
const process = require('process');
const reader = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
    terminal : true,
});

var lines = [];

reader.on ('line', (input) => {
    lines.push (input);
});

reader.on ('close', function () {
    var s = lines[0].split('');
    var t = Array.from (s);
    var sum = Number (s.map(Number).join('')) + Number (t.reverse().map(Number).join(''));
    if (sum == isPalindrome (sum)) {
        console.log (sum);
    }
    else {
        while (1) {
            sum+=1;
            if (sum == isPalindrome (sum)) {
                console.log (sum);
                break;
            }
        }
    }
});

function isPalindrome (sum) {
    var rev = Number(String(sum).split('').reverse().join(''));
    return rev;
}


/*

12
33


8
22
*/