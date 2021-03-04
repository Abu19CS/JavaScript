const readline = require('readline');
const process = require('process');
const { read } = require('fs');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});

var lines = [];

reader.on ('line', (input) => {
    lines.push (input);
});

reader.on ('close', function () {
    var s1 = lines[0].trim();
    var s2 = lines[1].trim();
    var f = [];
    for (const char of s2) {
        var bin = char.charCodeAt(0).toString(2).padStart(8, '0');
        var substr =[];
        for (let i = 0; i < bin.length; i++) {
            if (bin.charAt(i) == 1) {
                substr.push (s1.charAt(i).toUpperCase());
            }
            else if (bin.charAt (i) == 0) {
                substr.push (s1.charAt (i).toLowerCase());
            }
        }
        f.push (substr.join(''));
    }
    console.log (...f);
});