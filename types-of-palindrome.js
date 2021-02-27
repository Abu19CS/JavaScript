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
    // Start here
    var str = lines[0], points = 0;
    var rev = Array.from (str).reverse().join('')
    var ar = Array.from (str);
    var num = [], alpha = [];
    for (let i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (char >= '0' && char <= '9') {
            num.push (+char);
        }else alpha.push (char);
    }

    if (alpha.join('') == Array.from(alpha).reverse().join('') && alpha.length) {
        points += 1;
    }
    if (num.join('') == Array.from(num).reverse().join('') && num.length) {
        points += 1;
    }
    if (str == rev && str.length) {
        points += 1;
    }

    if (points != 0){
        switch (points) {
            case 1:
                console.log ('Single Palindrome');break;
            case 2:
                console.log ('Double Palindrome');
                break;
            case 3:
                console.log ('Triple Palindrome'); break;
        }
    }
    else console.log ('No Palindrome');
});