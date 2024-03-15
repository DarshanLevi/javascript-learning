// Implement a program to calculate the electricity bill for a household based on units consumed.

let current = 100

function electricBill(x){
    
if (typeof x === 'string') {
  return "invalid input";
  }
else  if (x > 0){ 
  return (x*current)
  } 

else {
  return "invalid"
  }
};

console.log(electricBill(34))