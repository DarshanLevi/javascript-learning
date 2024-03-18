// Write a program to determine if a given string is a palindrome or not.

function isPalindrome(str) {
    
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    return cleanedStr === cleanedStr.split('').reverse().join('');
}

const testString = "A man, a plan, a canal, Panama!";
if (isPalindrome(testString)) {
    console.log(`"${testString}" is a palindrome.`);
} else {
    console.log(`"${testString}" is not a palindrome.`);
}