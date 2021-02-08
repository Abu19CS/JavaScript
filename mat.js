const prompt = require ('prompt-sync')();

const [r, c] = prompt ().split (' ').map (val => +val);
var mat = [];

for (let i = 1; i <= r; i++) {
    let row = prompt().split(' ').map (val => +val);
    mat.push (row);
}
const k = +prompt();

var temp, sub = [];
for (let i = r; i > 1; i-=2) 
{
    for (let j = c; j > 1; j-=2) 
    {
        if (k > 0) 
        {
            temp = [mat[i-2][j-2], mat[i-2][j-1], mat[i-1][j-2], mat[i-1][j-1]];
            k--;
            sub.push (temp);
        }
        else break;
    }
}

for (const subMartrix of sub) {
    console.log (subMartrix);
}