// Hacker Rank: non-divisable subset (difficulty: medium)

function nonDivisibleSubset(k, s) { 
    	//mode as it stands is not capable of returning equal mode values.
    let mode = (arr) => {
	let t = Math.max(...arr) + 1;
        let count = new Array(t).fill(0);
        
        for (let i=0; i < arr.length; i++) { //Using the indexes of the array to represent the numbers in 's'. Fantastic
            count[arr[i]] += 1;
        };
        
        let mode = 0;
        let k = count[0];
        for (let i=0; i <= t; i++) {
            if(count[i] > k) {
                k = count[i];
                mode = i;
            };
        };
        return mode;
    }
   			  //is counting the violations really the most intuitve way to go about this? 
    let repeatingInt = [], violationCount = 0;
    for (let i=0; i < s.length-1; i++) {//.length returns a non-zero indexed count of 's'. 
        
	    for (let x=i+1; x <= s.length-1; x++) {  
              if ((s[i] + s[x]) % k == 0) { 
             	//add a condition that never pushes 1 too repeatingInt.
		s[i] == 1 ? repeatingInt.push(s[x]) : s[x] == 1 ? repeatingInt.push(s[i]) : repeatingInt.push(s[i], s[x]);
		violationCount += 1;
               
		    if (violationCount > 1) {
                      // remove the mode of 'repeatingInt' from s
                      let item = mode(repeatingInt);
                      s.splice(s.indexOf(item), 1);
               	   } else {
			continue;
		   }
            } 
        }
    };
    let noDuplicates_s = [... new Set(s)];
    return noDuplicates_s.length;
}

const k = 3;
let s = [1,2,6,2,1,6,2];//2 is the offender of k=3
console.log(nonDivisibleSubset(k, s))
