const readline = require('readline');
const reader = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});

var lines =[];

reader.on ('line', (input) => {
    lines.push (input);
});

reader.on ('close', function () {
   var map = new Map();
   for (let i = 0; i < 12; i++) {
       var [key, value] = lines[i].split(' ');
       value = parseFloat (value);
       map.set (key, value);
   }
   
   var iterator = [...map];
   for (let i = 0; i < iterator.length; i++) {
       for (let j = i+1; j < iterator.length; j++) {
           if (iterator[i][1] < iterator[j][1]) 
           {
               let t = iterator[i]
               iterator[i] = iterator[j];
               iterator[j] = t ;
           }
       }
   }

   for (let i = 0; i < 6; i++) {
       console.log (iterator[i][0], iterator[i][1]);
   }
});

/**
Input:
Kohli 59.3
Dhawan 45.1
Prithvi 28.0
Rahane 35.3
Rahul 47.6
Manish 35.1
Shreyas 49.9
Rishabh 26.7
Hardik 29.9
Jadeja 31.9
Bumrah 3.8
Bhuvneshwar 14.2

Output:
Kohli 59.3
Shreyas 49.9
Rahul 47.6
Dhawan 45.1
Rahane 35.3
Manish 35.1

Input:
Finch 41.0
Jason 9.5
Carey 34.2
Ashton 21
Cummins 9.6
Handscomb 33.3
Josh 13.2
Marnus 50.8
Kane 15.9
Smith 42.5
Turner 35.5
Warner 45.8

Output:
Marnus 50.8
Warner 45.8
Smith 42.5
Finch 41
Turner 35.5
Carey 34.2
**/