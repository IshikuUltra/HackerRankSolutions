function nonDivisibleSubset(k, s) { 
    let mode = (arr) => { //how is this arrow function bound
    // How often should mode() be run? 
        let t = Math.max(...arr) + 1;
        let count = new Array(t).fill(0);
        
        for (let i=0; i < arr.length; i++) {
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
        console.log(mode) //returning the mode as 4 on [1,7,2,4]
        return mode;
    }
    
    let repeatingInt = [], violationCount = 0;
    for (let i=0; i < s.length-1; i++) { //should not loop too s[-1]
        for (let x=i+1; x <= s.length-1; x++) {  
            console.log((s[i] + s[x]) % k == 0)
            if ((s[i] + s[x]) % k == 0) { // something isnt right im getting a mode 4 pushed to repeatingInt
                repeatingInt.push(s[i], s[k]);
                violationCount++;
                if(violationCount > 1) {
                    // remove the mode(repeatingInt) from s
                    let item = mode(repeatingInt);
                    s.splice(s.indexOf(item), 1);
                }
            } continue;
        }
    };
    console.log(s);
    return s.length;
}