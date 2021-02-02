let values = [0,1,2,3]; // can i swap values[0] to values[1]?
let i = values[0];
let j = values[1];
values[0] = j, values[1] = i;
console.log(values)


// let val = values.splice(0,1);
// values[1] = val; // this explicityly changes the val at that positino
// console.log(values)