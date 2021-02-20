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
    var obj = {
        'No Vowels' : [],
        'a' : [],
        'ae' : [],
        'aei': [],
        'aeio': [],
        'aeiou': [],
        'aeiu':[],
        'aeo':[],
        'aeou':[],
        'aeu':[],
        'ai':[],
        'aio' : [],
        'aiou': [],
        'aiu' : [],
        'ao' : [],
        'aou' : [],
        'au' : [],
        'e': [],
        'ei' : [],
        'eio' : [],
        'eiou' : [],
        'eiu' : [],
        'eo' : [],
        'eou': [],
        'eu': [],
        'i' : [],
        'io' : [],
        'iou': [],
        'iu' : [],
        'o' : [],
        'ou' : [],
        'u' : [],
    };

    var n = +lines[0];
    var vowel = 'aeiou';
    var original = [];
    var words = [];
    for (let i = 1; i <= n; i++) {
        let w = [...new Set (lines[i].trim().split('')).keys()];
        original.push (lines[i].trim())
        words.push (w.join(''));
    }
    for (let i = 0; i < words.length; i++) {
        let v = [], word = words[i].toLowerCase(), o = original[i];
        for (const char of word.split('')) {
            if (vowel.includes (char)) {
                v.push (char);
            }
        }
        if (v.length == 0) {
            let ar = obj['No Vowels'];
            ar.push (o);
        }
        else {
            var st = v.sort().join('');
            var ar = obj[st];
            ar.push (o);
        }
    }
    console.log ('\nOutput :\n');
    for (const prop in obj) {
        if (obj[prop].length != 0) {
            console.log (prop + ' - ' + obj[prop]);
        }
    }
});

/**
11
rat
tennis
normal
eagle
winter
bottle
intel
atom
journey
escape
by



3
GAME
Mask
TASK
**/