// Hacker Rank: non-divisable subset (difficulty: medium)
// Create the largest sub list of S -> S' that when and two integers in S' summed are not a multiple of 'K'
'use strict'

function nonDivisibleSubset(k, s) { 
  let values = new Array(k).fill(0); // bc there are 4 remainder values, 2 pairs that equal 4 (1+3)(2+2) also a special case of 0
  let result = 0;

  s.reduce((target, item) => { // remainders of s[i] from 0 -> k
    values[item % k] += 1;
    return target;
  }, 0); 

                //Array.from has no meaning, can replicate with for i too (k+1) / 2 -1
  for (let i of Array.from({ length: (k + 1) / 2 -1 }, (value, index) => index + 1)) { // what does the length: operation mean?
    result += Math.max(values[i], values[k - i]);
  } 

  !(k % 2) && !!values[k / 2] && (result += 1); //what is !0?..

  values[0] && (result += 1);

  return result;
};

const k = 4;
let s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // 
let final = nonDivisibleSubset(k, s);
