// Hacker Rank: non-divisable subset (difficulty: medium)

function nonDivisibleSubset(k, s) { 
    let sPrime = [];
    for (let i=0; i <= s.length-1; i++) { //.length returns a non-zero indexed count of 's'. And loops need to start at 0 because arrays are zero indexed
	    for (let x=i+1; x <= s.length-1; x++) {  
            if ((s[i] + s[x]) % k == 0) { // add two lists too sPrime, one containing s[i] and [...s] but not s[x], the other containing s[i] and [...s] but not s[i]
            //the loops need to by dynamic and switch to the s'[0] and s'[1] respectively 
            
            }
            else {
                continue;
            }
        }
    };
    return s;
}

const k = 4;
let s = [19,10,12,10,24,25,22]; // how to handle repeat numbers?
console.log(nonDivisibleSubset(k, s))
