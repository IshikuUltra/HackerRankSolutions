// Hacker Rank: non-divisable subset (difficulty: medium)
// Create the largest sub list of S -> S' that when and two integers in S' summed are not a multiple of 'K'
//Take a breath and read the code... zen logic...

function nds (s, k) {
    // Interesting conjecture -> any number mod k will always be < k?
    let values = new Array(k).fill(0); // each index represents the amount of times (s[i] % k)
    let result = 0;
  
    s.reduce((target, item) => { // Each index of "values" 0 through k represents a remainder.
      values[item % k] += 1;
    }, 0); 
    console.log(values)   
    // instead of a double loop he is comparing both sides... 
    // the Array constructor is temporary and only needs to be half of (values.length -1) because it doesn't need evaluate values[-1] since it will never be k remainder
    // it is comparing against remainder pairs of k eg. k = 4 -> remainderPairs = (1,3), (2,2) -> values uses indecies as the remainder pair numbers
    //THIS IS GOD LEVEL CODE >>>
    for (let i of Array.from({ length: (k + 1) / 2 -1 }, (value, index) => index + 1)) {// say k is 13... then Array = [1,2,3,4,5,6]
      console.log(i, k-i)
      result += Math.max(values[i], values[k - i]); // This is next level...
    } 
    // why if k%2 ?? and why if values[k/2]?
    !(k % 2) && !!values[k / 2] && (result += 1); 
    
    // values[0] is 0 then false else values[0] > 0 then true
    values[0] && (result += 1);
    
    return result;
}
// The question: why does the max of any given two remainders give the correct length?
const arr = [2375782, 21836421, 2139842193, 2138723, 23816, 21836219, 2948784 ,43864923 ,283648327, 23874673]; // why the remainders of each arr[i] mod k?
const k = 13;
console.log(nds(arr, k)); // return 7
