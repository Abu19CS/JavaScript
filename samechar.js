const prompt = require ('prompt-sync')();

var str = prompt().split(''), flag = 1;

while (flag === 1) 
{
    let init_len = str.length, fin_len;
    for (let i = 0; i < str.length; i++) {
        var c1 = String (str[i]).charCodeAt (0), c2 = String (str[i+1]).charCodeAt (0);
        if (str[i] >= 'a' && str[i] <= 'z') {
            if (c1 === c2 + 32) {
                str.splice (i, 2);
            }
        }
        else if (str[i] >= 'A' && str[i] <= 'Z') {
            if (c1 === c2 - 32) {
                str.splice (i, 2);
            }
        }
    }
    fin_len = str.length;
    if (fin_len === init_len) {
        flag = 0;
    }
}

str.length === 0 ? console.log (-1) : console.log (str.join(''));