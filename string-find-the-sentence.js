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

reader.on ('close', function () {
    var sentence = lines[0].trim().split('. ');
    var wordPos = +(lines[1].trim());
    var words = [];
    for (const word of sentence) {
        words.push (...word.split(' '));
    }
    if (wordPos >= 0)
    var posString = words[wordPos-1];
    else 
    posString = words[(words.length -(-wordPos))-1];
    for (const word of sentence) {
        if (word.split(' ').includes (posString) && word.split(' ').length >= wordPos) {
            var last = word.split(' ');
            if (last[last.length-1].slice(-1) != '.') {
                console.log (word.slice(0, word.length) + '.');
                process.exit (1);
            }else {
                console.log (word);
                process.exit (1);
            }
        }
        else {
            wordPos -= word.split(' ').length
        }
    }
});

/**
 * 
I am a doctor. I know how to cure the disease. Take this medicine 3 times a day.
8

You can do it. But think 100 times before you do.
-5
 */