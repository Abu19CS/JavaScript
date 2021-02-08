// New Team – CBI Officers: 
// There are two CBI teams investigating a case separately. One team contains M officers and other team contains N officers. The program must accept
// the name and the experience (in years) of each officer in both teams as the input. The government has decided to form a new team of X officers based on the following 
// conditions.
//     – At least two officers from each team must be included in the new team.
//     – More experienced officers are preferred than less experienced officers.
//     – If two or more officers have the same experience, the name must be given priority (ascending order).
// The value of X is also passed as the input to the program. The program must print the names of the officers in the new team based on the experience in descending order. 
// If two or more officers have the same experience, then sort those officers based on the name in ascending order.

// Boundary Condition(s):
// 2 <= M, N <= 20
// 1 <= Length of each officer’s name <= 20
// 1 <= Experience of each officer <= 25
// 4 <= X <= M+N

// Input Format:
// The first line contains M.
// The next M lines, each contains the name and the experience (in years) of an officer separated by a space.
// The (M+2)nd line contains N.
// The next N lines from the (M+3)rd line, each contains the name and the experience (in years) of an officer separated by a space.

// Output Format:
// The first X lines containing the names of the officers in the new team.

// Example Input/Output 1:
// Input:
// 4
// Abc 2
// Bcd 4
// Cde 8
// Def 5
// 3
// Ghi 3
// Efg 1
// Fgh 3
// 6

// Output:
// Cde
// Def
// Bcd
// Fgh
// Ghi
// Abc

// Explanation:
// In the 1st team, there are 4 officers. After sorting the officers based on the given conditions, the names become Cde, Def, Bcd and Abc.
// In the 2nd team, there are 3 officers. After sorting the officers based on the given conditions, the names become Fgh, Ghi and Efg.
// The size of the new team to be formed is 6.
// The officers Cde, Def from the 1st team and the officers Fgh,Ghi from the 2nd team are included in the new team.
// The remaining 2 officers (Bcd & Abc) are included and the their names are printed based on thegiven conditions.
// Cde
// Def
// Bcd
// Fgh
// Ghi
// Abc

// Example Input/Output 2:
// Input:
// 3
// ABC 7
// xyz 5
// PQR 5
// 3
// mno 5
// Def 5
// Stu 5
// 5

// Output:
// ABC
// Def
// PQR
// Stu
// mno

const readline = require('readline');
const process = require('process');
const reader = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
    terminal : true,
});

var lines = [], fin = [], x;

reader.on ('line', (input) => {
    lines.push (input);
});

reader.on ('close', function () {
    var M = +lines[0], len = lines.length-1, N
    var MOfficers = new Map(), NOfficers = new Map ();
    for (let i = 1; i <= M; i++) {
        [key, value] = lines[i].split(' ');
        MOfficers.set (key, value);
    }
    N = +lines[M+1], j = M+2;

    for (; j <= len-1; j++) {
        [key, value] = lines[j].split(' ');
        NOfficers.set (key, value);
    }
    x = +lines[len];
    fin = [...MOfficers, ...NOfficers];
    sortBasedOnExp (fin);
});

function sortNames (map) 
{
    var a = map;
    for (let i = 0; i < a.length; i++) 
    {
        for (let j = 0; j < (a.length - i - 1); j++) 
        {
            var e1 = +a[j][1], e2 = +a[j+1][1];
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
    console.log ('Output :');

    for (let i = 0; i < x; i++) {
        console.log (a[i][0]);
    }
}

function sortBasedOnExp (iter) {
    for (let i = 0; i < iter.length; i++) 
    {
        for (let j = 0; j < (iter.length-i-1); j++)
        {
            var exp1 = +iter[j][1], exp2 = +iter[j+1][1];
            if (exp1 < exp2) {
                let t = iter[j];
                iter[j] = iter[j+1];
                iter[j+1] = t;
            }
        }
    } sortNames (iter);
}

/*
Sample Input/Output1 :
4
Abc 2
Bcd 4
Cde 8
Def 5
3
Ghi 3
Efg 1
Fgh 3
6

Output :
Cde
Def
Bcd
Fgh
Ghi
Abc

Sample Input/Output 2 :
3
ABC 7
xyz 5
PQR 5
3
mno 5
Def 5
Stu 5
5

Output :
ABC
Def
PQR
Stu
mno

Sample Input/Output 3 :
17
IrsIUdYDCTW 15
oWPXugekxnjavkNp 14
B 12
MiWAsSyWKeD 15
IReHnIVSYFV 19
qAyJWdSm 13
AJtxMBvShFz 24
GsSWtnsmDMxhWOtjQ 10
HXrQ 25
HwiQVPPMAmRgZwhuYGwD 23
BwOFIJwuIEs 16
xRCQgCIAmWBXq 2
HKrpTCcABCfzJWrbhrqe 7
tlwUYtJ 17
UahkcRUnvbL 12
RDJQcUTqfAnkKSW 9
CnapJxZIRUxYCD 5
13
rZGMAdOSn 14
cM 10
acDPvsReEAdBsNT 7
NILZMpIYCQgsvTirCSi 17
JCfMntye 4
hIrTIohz 4
ErYrPG 15
gAKQyKXSafWmUg 1
nRILDBIYKO 20
sGtvQuaHCEQWBtrenVpw 23
br 24
B 1
GIrgAWdvMNQiBWuBUGyr 2
10

Output :
HXrQ
AJtxMBvShFz
br
HwiQVPPMAmRgZwhuYGwD
sGtvQuaHCEQWBtrenVpw
nRILDBIYKO
IReHnIVSYFV
NILZMpIYCQgsvTirCSi
tlwUYtJ
BwOFIJwuIEs
*/
