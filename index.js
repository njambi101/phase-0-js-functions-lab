function calculateTax (amount) {
    let calc = amount * 10 /100;
    return calc
}

function convertToUpperCase(text) {
    let upperCase = text.toUpperCase();
    return upperCase;
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num2;
    }
    else {
        return num2;
    }
}
function isPalindrome(word) {
    let rev = str.split("").reverse().join("");
    if(rev === str) {
        return true;
    }
    return false;
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let savedAmount = (originalPrice * discountPercentage /100);
    let discount = originalPrice - savedAmount;
    return discount;
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };