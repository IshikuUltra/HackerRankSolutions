// Hacker Rank: non-divisable subset (difficulty: medium)
// Create the largest sub list of S -> S' that when and two integers in S' summed are not a multiple of 'K'
'use strict'

//IT WORKS BUT ITS SLOW AF
function nonDivisibleSubset(k, s) { 
    if (k === 1) {
        return 1;
    };

    let mode = (arr, s1, s2) => { 
        let modes = {s1:0, s2:0}; 
        arr.forEach((e) => {if(e == s1){modes.s1 +=1 }; if(e==s2){modes.s2 += 1}}); 

        if (modes.s1 > modes.s2) {
            return s2;
        } else if (modes.s2 > modes.s1) {
            return s1
        } else {
            return Math.max(...[s1,s2]); 
        }
    };
    
    let remainders = [];
    s.forEach((e) => {remainders[remainders.length] = (e % k)})
    console.log(remainders);
    // remainders.length == s.length && console.log(true); 
    for (let i=0; i < remainders.length; i++) { 
        for (let j=1; j < remainders.length; j++) { // running n-1 everytime i increments
            if ((remainders[i] + remainders[j]) === k ) { // THESE ARE THE REMAINDER VALUES YOU IDIOT
                let tooRemove = mode(remainders, remainders[i], remainders[j]);
                let index = remainders.indexOf(tooRemove);
                remainders.splice(index, 1)
            } continue;
        }
    }
    return remainders.length;
};

const k = 1;
let s = [1, 2, 3, 4, 5]; // return: 1
let final = nonDivisibleSubset(k, s);
console.log(final)
