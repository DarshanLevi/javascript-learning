// Implement a program that determines the BMI (Body Mass Index) category based on user input height and weight

let feet = 5.7 
let oneMeter = 0.3048
let result = feet*oneMeter

function findBodyMass(x){
    if (typeof x === 'number' ) {

    if (result){
        return (x/(result*result))
    }
    else {
        return "invalid"
    }
} else {
    return "invalid measurements"
}
}

console.log(findBodyMass(51))