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
    var str = lines[0].split(' '), result = [];
    var nums = [], break_pos = [];
    for (let i = 0; i < str.length; i++) {
        let s = str[i], l = s.length, temp = [], added = 0;
        for (let j = l - 1; j >= 0; j--) {
            if (s[j] >= '0' && s[j] <= '9') {
                temp.push (s[j]);
                added = 1;
            } else {
                break_pos.push (j+1);
                break;
            }
        }
        if (added == 0) {
            nums.push (' ');
        }
        else nums.push (temp.reverse().join(''))
    }

    var modified = [];

    for (let i = 0; i < nums.length; i++) {
        var init_str = nums[i].split (''), pad, res , ad = i+1;
        if (init_str[0] === '0') {
            let pos = init_str.indexOf ('0'), c =0;
            while (pos !== -1) {
                c++;
                pos = init_str.indexOf ('0', pos+1);
            }
            pad = String(parseInt((init_str.slice (c, init_str.length).join(''))) + ad);
            res = ''.padStart (init_str.length - pad.length, '0') + pad;
            modified.push (res);
        }
        else modified.push (String(parseInt(init_str.join('')) + ad));
    }

    for (let i = 0; i < modified.length; i++) {
        var s = str[i].length, s_pos = break_pos[i], ins = modified[i];
        var res = str[i].split('')
        if (ins === 'NaN') {
            res.splice (s_pos, 0, '1');
        }
        else {
            res.splice (s_pos, s - s_pos, ...ins.split(''));
        }
        result.push (res.join(''));
    }
    console.log (result.join(' '));
})



/*

Input/Output 1:
tea0034 coffee77 boost98 Glucose salt00001
tea0035 coffee79 boost101 Glucose1 salt00006

Input/Output 2:
Chennai08 Delhi0002 Kolkata099 Mumbai Nagpur Kerala999 Apple10Grapes12
Chennai09 Delhi0004 Kolkata102 Mumbai1 Nagpur1 Kerala1005 Apple10Grapes19

*/
