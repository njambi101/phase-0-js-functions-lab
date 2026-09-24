function calculateTax (amount) {
    let calc = amount * 10 /100;
    return calc
}

function convertToUpperCase(text) {
    let upperCase = text.toUpperCase();
    return upperCase;
}

function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2
}
function isPalindrome(word) {
    let upper = word.toUpperCase();
    let rev = upper.split("").reverse().join("");
    return upper === rev;
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let savedAmount = (originalPrice * discountPercentage /100);
    let discount = originalPrice - savedAmount;
    return discount;
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };