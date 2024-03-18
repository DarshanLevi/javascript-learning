// Write a program to categorize a given temperature as "hot", "moderate", or "cold".

function temperatureCheck(celsius) {
    if (celsius > 25) {
        return 'hot'
    }
    else if (celsius >= 15) {
        return 'moderate'
    }
    else  {
        return 'cold';
    }

}

console.log (temperatureCheck(32))
