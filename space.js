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

reader.on ('close' , function () {
    var a = [[ 'ABC', '7' ],[ 'PQR', '5' ],[ 'xyz', '5' ],[ 'mno', '5' ],[ 'Def', '5' ],[ 'Stu', '5' ]]
    for (let i = 0; i < a.length; i++) 
    {
        for (let j = 0; j < (a.length - i - 1); j++) 
        {
            var e1 = a[j][1], e2 = a[j+1][1];
            var n1 = a[j][0], n2 = a[j+1][0];
            if (e1 == e2) {
                if (n1 > n2) {
                    let t = a[j];
                    a[j] = a[j+1];
                    a[j+1] = t;
                }
            }
        }
    }
    console.log (a);
})