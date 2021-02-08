const prompt = require ('prompt-sync')();

var str = prompt(), count = []

for (let i = 0; i < str.length; i++) {
    var char = str.charAt (i);
    Array.prototype.push.call (count, countChar (char, str));
}

max = Math.max (...count);

function countChar (c, s) {
    let count = 0, pos = s.indexOf (c);
    while (pos !== -1) {
        count += 1;
        pos = s.indexOf (c, pos+1);
    }
    return count;
}

var strconcat = ''

for (let i = 0; i < str.length; i++) {
    var char = str.charAt (i);
    if (count[i] === max) {
        strconcat += char + '';
    }
}

console.log (strconcat);