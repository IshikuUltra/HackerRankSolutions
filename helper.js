let cost = [1,4,2,67,4,6,7,9];
let money = 5;

console.log(cost.reduce(function(prev, curr) {
    console.log(prev-money, curr-money)
    return (Math.abs(curr - money) < Math.abs(prev - money) ? curr : prev);
  }))
