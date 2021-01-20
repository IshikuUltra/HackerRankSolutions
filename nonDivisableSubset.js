// Hacker Rank: non-divisable subset (difficulty: medium)
// Create the largest sub list of S -> S' that when and two integers in S' summed are not a multiple of 'K'
'use strict'
//IT WORKS BUT ITS SLOW AF -> WON'T PROCESS 25,000 <= S <= 100,000
function nonDivisibleSubset(k, s) { 
    if (k === 1) {
        return 1;
    };

    function mode(arr, s1, s2) { 
        let modes = {s1:0, s2:0}; // resets automatically
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
    s.forEach((e) => {remainders[remainders.length] = (e % k)});
    // the double loop irreplacable?
    for (let i=0; i < remainders.length; i++) { 
        for (let j=1; j < remainders.length; j++) { 

            if ((remainders[i] + remainders[j]) === k ) { 
                let index = remainders.indexOf(mode(remainders, remainders[i], remainders[j]));
                remainders.splice(index, 1);
            }
        }
    }
    console.log(remainders)
    return remainders.length;
};

const k = 4;
let s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // return: 1
let final = nonDivisibleSubset(k, s);
console.log(final)