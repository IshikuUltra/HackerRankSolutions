// Hacker Rank: non-divisable subset (difficulty: medium)
// Create the largest sub list of S -> S' that when and two integers in S' summed are not a multiple of 'K'

function nds (s, k) {
    if(k == 1 || k == 0) {
        return 1;
    }

    let frequency = {}; 
    let r = [];
    // how to measure forEach() on arrays > 80,000
    // should i combine the e%k into the r[n] + r[n+i] -> (n%k) + (n+i%k) == k ? Better performance?
    s.forEach((e) => {let eModK = (e%k); r[r.length] = (eModK); eModK in frequency ? frequency[eModK]+=1 : frequency[eModK] = 0;});
    //USE COUNTERS INSTEAD OF STORING THE NUMBERS:
    for(let i=0; i < r.length; i++) {
        for(let j=1; j < r.length; j++) {
            if(r[i] + r[j] === k) { 
                //keep the one with the higher frquency 
                frequency[r[i]] > frequency[r[j]] ? r.splice(r.indexOf(r[i]),1) : r[i] > r[j] ? r.splice(r.indexOf(r[j]),1) : r.splice(r.indexOf(r[i]),1);
            }
        }
    }
    console.log(r)
    return r.length; // r = [6,9,2,2,1,8,0]
}

const arr = [2375782, 21836421, 2139842193, 2138723, 23816, 21836219, 2948784 ,43864923 ,283648327, 23874673]; 
const k = 13;
console.log(nds(arr, k)); // return 7
