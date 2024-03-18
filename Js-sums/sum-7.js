// Write a program to calculate the total cost of items purchased, including tax, based on user input.
let tax = 18

function totalCost(cost){
    if (cost) {
        return (cost*tax / 100)
    }
    else {
        return "invalid"
    }
}

console.log(totalCost(255000))