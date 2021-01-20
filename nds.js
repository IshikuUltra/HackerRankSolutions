// Hacker Rank: non-divisable subset (difficulty: medium)
// Create the largest sub list of S -> S' that when and two integers in S' summed are not a multiple of 'K'

function nds (s, k) {
    if(k == 1 || k == 0) {
        return 1;
    }
    //take remainders of all the ints in s
    let r = [];
    // how to measure forEach() on arrays > 80,000
    // should i combine the e%k into the r[n] + r[n+i] -> (n%k) + (n+i%k) == k ? Better performance?
    // track frequency here since we already looping?
    s.forEach((e) => {r[r.length] = (e % k); });
    // now we need to check if r[n] + r[n+i] is k
    //USE COUNTERS INSTEAD OF STORING THE NUMBERS:
    for(let i=0; i < r.length; i++) {
        for(let j=1; j < r.length; j++) {
            if(s[i] + s[j] === k) {
                //keep the one with the higher frquency 
            }
        }
    }
    return r;
}

const arr = [2375782, 21836421, 2139842193, 2138723, 23816, 21836219, 2948784 ,43864923 ,283648327, 23874673];
const k = 13;
console.log(nds(arr, k)); // return 7
