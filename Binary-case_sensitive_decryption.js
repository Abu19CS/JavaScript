const readline = require('readline');
const process = require('process');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});

var lines = [];

reader.on ('line', (input) => {
    lines.push (input);
});

reader.on ('close', function() {
    var str = lines[0].trim();
    var words = [], k = 5;
    for (let i = 0; i < str.length; i+=5) {
        var concat = '';
        for (let j = i; j < k; j++) concat += str[j];
        k+=5;
        words.push (concat);
    }
    var map = new Map(), ch = 'a';
    for (let i = 0; i < 26; i++) {
        [key, val] = [i, ch];
        map.set (key, val);
        ch = String.fromCharCode(ch.charCodeAt(0) + 1);
    }
    map.set (26, '.')
        .set (27, ',')
        .set (28, ' ')
        .set (29, '?')
        .set (30, '\'')
        .set (31, '\"');
    var result = [];
    for (const w of words) {
        var binRep = '';
        for (const char of w) {
            if (char >= 'A' && char <= 'Z') binRep += '1';
            else if (char >= 'a' && char <= 'z') binRep += '0';
        }
        result.push (map.get(parseInt(binRep, 2)));
    }
    console.log (result.join(''));
});

/**
abcDEtSAYtmaRKs
dog


EytWGeqNKYcbNpqLSXcoAHCUIbgrarZzcpRPvoYGYOQIUQAsHh
the "art".
**/