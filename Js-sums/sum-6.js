// Create a program that checks if a given character is a vowel or a consonant.

function vowelOrConsonant(char){
 char = char.toLowerCase();

   if (/[a-z]/.test(char)) {

    if (/[aeiou]/.test(char)) {
        return char + "is vowel"
    }
    else {
        return char + " is not a vowel"
    }
   }
   else {
    return "invalid"
   }
}

console.log (vowelOrConsonant('2'))