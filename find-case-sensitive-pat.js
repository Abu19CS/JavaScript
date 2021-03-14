const readline = require('readline');
const process = require('process');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});

var lines = [];

reader.on('line', (input) => {
    lines.push(input);
});

reader.on('close', function () {
    var str = lines[0].trim()
    var pat = lines[1].trim().split('');

    var matched = [], k = pat.length, c = 0;
    for (let i = 0; i < str.length; i++) {
        var con = '', j = i;
        while (j < k) {
            if ((pat[c] >= 'A' && pat[c] <= 'Z' && str[j] >= 'A' && str[j] <= 'Z') ||
                (pat[c] >= 'a' && pat[c] <= 'z' && str[j] >= 'a' && str[j] <= 'z')) {
                con += str[j];
            }
            j++;
            c++;
        }
        k += 1;
        c = 0;
        if (con.length == pat.length)
            matched.push(con);
    }
    if (matched.length) {
        for (const word of matched) {
            console.log(word);
        }
    } else console.log(-1);
});

/**
AtAAnTheIsWasWere
IoT

AtA
AnT
IsW


SkillRack
Do

Sk
Ra
 */