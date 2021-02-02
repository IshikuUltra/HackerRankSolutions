// Hash tables: Ice Cream Parlor HackerRank (medium)

function iceCreamParlor(money, cost) {
    //set upper and lower bounds to filter
    let lowerBound = cost.indexOf(Math.min(cost)); 
    let upperBound = cost.indexOf(cost.reduce(function(prev, curr) { // works by finding the smallest number meaning its the closest too money.
        return (Math.abs(curr - money) < Math.abs(prev - money) ? curr : prev) } ));
    //order cost from least to greatest
    cost = cost.sort(function(a,b) {return a-b});
    console.log(cost)
    //filter for the two numbers that equal money and return their indexes.
}

const money = 5;
const cost = [2,6,1,5,3,14,8,9]; //answer should be 1-indexed
console.log(iceCreamParlor(money,cost));