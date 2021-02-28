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
    var list = lines[0].split(' ');
    var k = +lines[1], concat = [], results = [], pos, ind;
    for (let i = 0; i < list.length; i+=k) {
        var str = '', pos = i;
        for (let j = 1; j <= k; j++) {
            str+= list[pos];
            pos++;
        }
        concat.push (str);
    }

    var sorted = Array.from (concat).sort ((a, b) => {
        return a - b;
    });
    var checked = [];
    for (let i = 0; i < sorted.length; i++) {
        var v = sorted[i];
        var r = checked.includes (v);
        var t = k, st;
        if (r) {
            pos = concat.indexOf (v);
            while (pos !== -1) {
                st = pos;
                pos = concat.indexOf (v, pos+1);
                if (l == checked.count (v)) break;
                l++;
            }
            st *= k;
            while (t) {
                results.push (list[st]);
                st++;
                t--;
            }
        }
        else {
            ind = concat.indexOf (v)
            ind *= k;
            while (t) {
                results.push (list[ind]);
                ind++;
                t--;
            }
        }
        checked.push (v);
    }
    console.log (results.join(' '));
});

/*
4 56 0 789 12 3
2


98 467 1 5 7 67 0 18 0
3

12 3 0 123 1 23 12 3
2
*/
