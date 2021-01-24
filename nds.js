// Hacker Rank: non-divisable subset (difficulty: medium)
// Create the largest sub list of S -> S' that when and two integers in S' summed are not a multiple of 'K'
//Take a breath and read the code... zen logic...

function nds (s, k) {
    let values = new Array(k).fill(0); // bc there are 4 remainder values, 2 pairs that equal 4 (1+3)(2+2) also a special case of 0
    let result = 0;
  
    s.reduce((target, item) => { // remainder ammounts of s[i] % k) from 0 -> k
      values[item % k] += 1;
      return target;
    }, 0); 
  
    for (let i of Array.from({ length: (k + 1) / 2 -1 }, (value, index) => index + 1)) { // what does the length: operation mean?
      result += Math.max(values[i], values[k - i]);
    } 
  
    !(k % 2) && !!values[k / 2] && (result += 1); //what is !0?..
  
    values[0] && (result += 1);
    
    console.log(result)
    return result;
}

const arr = [2375782, 21836421, 2139842193, 2138723, 23816, 21836219, 2948784 ,43864923 ,283648327, 23874673]; 
const k = 13;
console.log(nds(arr, k)); // return 7
