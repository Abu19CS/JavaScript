const prompt = require ('prompt-sync')();

var s1 = prompt (), s2 = prompt (), index = s1.indexOf (s2[0]);

if (index == -1) {
    console.log ('NO');
}
