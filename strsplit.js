const prompt = require ('prompt-sync')();

var str = prompt ().trim();
var st = [], ans = [];

for (var i = 0; i < str.length; i++) {
    if (st.length === 0) {
        st.push (str.charAt(i));
    }
    else if (st[0] === str.charAt (i)) {
        st.push (str.charAt(i));
    }
    else {
        var len = st.length;
        if (len % 2 === 0) {
            ans.push ([i-len, i]);
        }st = [str[i]];
    }
}

if (st.length % 2 === 0) {
    ans.push ([str.length - st.length+1, str.length-1]);
}

var ind = 0, w;
for (let val of ans) {
    w = (val[0]+val[1])/2;
    console.log (str.slice (ind, w));
    ind = w;
}
var rem = str.slice (ind, str.length);
if (rem != '') {
    console.log (rem);
}