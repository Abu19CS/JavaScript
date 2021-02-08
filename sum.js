const readline = require('readline');
const reader = readline.createInterface ({
    input: process.stdin, 
    output: process.stdout,
    terminal: true,
});

var lines = [];

reader.on ('line', (input) => {
    lines.push (input);
});

reader.on ('close', function () {
    var str = lines[0];
    temp = str.split('');
    var l = lines[1].split(' ').map (val => +val);

    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lower = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < str.length; i++) 
    {
        for (let j = 0; j < str.length; j++)
        {
            var char = str.charAt (j), code;

            if (j <= i) {
                if (char >= 'A' && char <= 'Z') {
                    code = (upper.indexOf (char) + l[i]) % 26;
                    temp[j] = upper.charAt (code);
                }
                else if (char >= 'a' && char <= 'z') {
                    code = (lower.indexOf (char) + l[i]) % 26;
                    temp[j] = lower.charAt (code);
                }
            }
            else {
                temp[j] = str.charAt(j);
            }
        }
        str = temp.join('');
    }

    console.log ('Output : ')
    console.log (str);
});

/*

big 
2 1 6

SkillRack
8 7 6 5 3 2 1 4 9

*/