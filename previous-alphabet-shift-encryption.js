var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

var lines = [];

reader.on('line', function (line) {
    lines.push(line);
});

reader.on('close', function () {
    Object.defineProperties (Array.prototype, {
        isAlpha : {
            value: function (val) {
                if ((val >= 'a' && val <= 'z') || (val >= 'A' && val <= 'Z')) return true;
                else return false;
            },
            enumerable: true,
            configurable: false,
            writable: true,
        }
    });

    var str = lines[0].trim();
    var arOfStr = Array.from (str), a;
    
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lower = 'abcdefghijklmnopqrstuvwxyz';

    var res = [], lastChar = [];
    res.push (str.charAt(0));
    for (let i = 1; i < arOfStr.length; i++) {
       if (arOfStr.isAlpha (arOfStr[i])) {
           var curr = str.charAt(i), prev = str.charAt (i-1);
           if ((curr >= 'a' && curr <= 'z') && (prev >= 'a' && prev <= 'z')) {
                lastChar.push (i)
                a = ((lower.indexOf (curr) + lower.indexOf (prev) + 1) % 26);
                res.push (lower.charAt (a));
           }
           else if ((curr >= 'A' && curr <= 'Z') && (prev >= 'A' && prev <= 'Z')) {
                lastChar.push (i)
                a = (upper.indexOf (curr) + upper.indexOf (prev) + 1) % 26;
                res.push (upper.charAt (a));
           }
           else if ((curr >= 'A' && curr <= 'Z') && (prev >= 'a' && prev <= 'z')) {
                lastChar.push (i)
                a = ((upper.indexOf (curr) + lower.indexOf (prev) + 1) % 26);
                res.push (upper.charAt (a));
           }
           else if ((curr >= 'a' && curr <= 'z') && (prev >= 'A' && prev <= 'Z')) {
                lastChar.push (i)
                a = ((lower.indexOf (curr) + upper.indexOf (prev) + 1) % 26);
                res.push (lower.charAt (a));
           }
           else if ((curr >= 'a' && curr <= 'z') || (curr >= 'A' || curr <= 'Z') && !((prev >= 'a' && prev <= 'z') || (prev >= 'A' && prev <= 'Z'))) {
                var lPos = lastChar.pop();
                var c = str.charAt (lPos);
                if ((c >= 'a' && c <= 'z') && (curr >= 'a' && curr <= 'z')) {
                    a = (lower.indexOf (c) + lower.indexOf (curr) + 1) % 26;
                    res.push (lower.charAt (a));
                }
                else if ((c >= 'A' && c <= 'Z') && (curr >= 'A' && curr <= 'Z')) {
                    a = (upper.indexOf (c) + upper.indexOf (curr) + 1) % 26;
                    res.push (upper.charAt (a));
                }
                else if ((c >= 'a' && c <= 'z') && (curr >= 'A' && curr <= 'Z')) {
                    a = (lower.indexOf (c) + upper.indexOf (curr) + 1) % 26;
                    res.push (upper.charAt (a));
                }
                else {
                    a = (upper.indexOf (c) + lower.indexOf (curr) + 1) % 26;
                    res.push (lower.charAt (a));
                }
           }
       }else res.push (arOfStr[i]);
    }

    console.log (res.join(''));
});


/**
hel#121#LO
hmq#121#XA



1#2@3chO*cO#Cook#IE72
1#2@3ckW*rR#Rrdz#TN72
 */
