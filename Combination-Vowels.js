// Group By - Combinations of vowels
// The program must accept N string values as the input. The program must group the string values based on the combination of vowels (No vowels,
// a, ae, aei, aeio, aeiou, aeiu, aeo, aeou, aeu, ai, aio, aiou, aiu, ao, aou, au, e, ei, eio, eiou, eiu, eo, eou, eu, i, io, iou, iu, o, ou and
// u). The program must print all possible combinations of the vowels followed by the string values that belong to the cobination as shown in 
// the Example Input/Output section. The combinations of vowels must be printed in the above mentioned order. The string values that belong to a 
// combination must be printed in the order of their occurence.

// Boundary Conditions:
// 1 <= N <= 100
// 1 <= Length of each string value <= 100

// Input Format:
// The first line Contain N.
// The next line contain N string values.

// Output Format:
// The lines containing the all possible combinations of the vowels followed by the string values that belong to the combinations.

/**
Example Input/Output 1:

Input:
12
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
your

Output:

No Vowels - by
a - rat
ae - eagle,escape
ao - normal,atom
ei - tennis,winter,intel
eo - bottle
eou - journey

Example Input/Output 2:

Input:
3
GAME
Mask
TASK

Output:

a - Mask,TASK
ae - GAME
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
