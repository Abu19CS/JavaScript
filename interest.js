const prompt = require ('prompt-sync')();

var [p, n] = prompt ().split (' ').map (value => parseInt (value));
var r = +(parseFloat (prompt ()) / 1200).toPrecision (4);

var intrestAmount = Math.ceil((p * r)), v =  1 + r;
var emi = Number(((intrestAmount * Number(Math.pow (v, n).toFixed (4))) / Number((Math.pow (v, n) -1).toFixed (4))).toFixed (2));
var totalIntrest = 0.0, totalAmount = 0.0;

for (let month = 1; month <= n; month++) {
    var intrestAmount = Math.ceil((p * r)), v =  1 + r;
    var principleAmount = emi - intrestAmount;
    var endingBal = p - principleAmount;
    totalIntrest = parseFloat (totalIntrest + intrestAmount);
    console.log ('\nDue for the Month' + month)
    console.log ('Beginning Balance : ' + p.toFixed ());
    console.log ('EMI : ' + emi.toFixed ());
    console.log ('Principle : ' + principleAmount.toFixed ());
    console.log ('Intrest : ' + intrestAmount.toFixed ());
    console.log ('Ending Balance : ' + endingBal.toFixed () + '\n');
    p = endingBal;
    totalAmount = parseFloat (totalAmount + emi);
}

console.log ('\n\nTotal Amount Payable : ' + totalAmount.toFixed ());
console.log ('Total Interest : ' + totalIntrest.toFixed ());
/*

400000 36
10.65

*/