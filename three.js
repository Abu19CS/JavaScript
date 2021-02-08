const readline = require('readline');
const process = require('process');
const EventEmitter = require ('events');

const reader = readline.createInterface ({
    input: process.stdin,
    output : process.stdout, 
    terminal : true,
});

var eventEmitter = new EventEmitter();
var lines = [];

reader.on ('line', function (input) {
    lines.push (input);
});

reader.on ('close', function () {
    var n = lines[0];
    var map = new Map ();
    var modMap = new Map ();

    for (let i = 1; i <= n; i++) {
        [key, value] = lines[i].split(' ');
        map.set (key, value);
    }
    
    var iterator = [...map];
    for (let i = 0; i < iterator.length; i++) {
        var value = iterator[i][1], keysAr = [];
        for (let j = i+1; j < iterator.length; ) {
            var sVal = iterator[j][1], key = iterator[j][0];
            if (sVal === value) {
                keysAr.push (iterator[j][0]);
                iterator.splice (j, 1);
                j-=1;
            }
            else j++;
        }keysAr.unshift (iterator[i][0]);
        modMap.set (value, keysAr);
    }
    var keys = [...modMap.keys()].map (Number), max = Math.max (...keys);

    while (keys.length) {
        ind = keys.indexOf(max);
        keys.splice(ind,1);
        v = modMap.get (max);
        console.log (max, modMap.get (String(max)).join(','));
        max = Math.max (...keys);
    }
});


/*
5
ghi 1500
def 1200
abc 1500
jkl 1500
mno 1600

*/