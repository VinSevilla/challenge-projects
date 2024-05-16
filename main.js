/**
 * Project: Credit Card Validator
 * Author: Venancio L. Sevilla
 * Date: 15 May 2024
 * 
 * This project implements the Luhn algorithm to validate credit card numbers.
 * The Luhn algorithm is a series of mathematical calculations used to validate
 * certain identification numbers, such as credit card numbers.
 * 
 * The steps involved in the Luhn algorithm are as follows:
 * 1. Starting from the farthest digit to the right (the check digit), iterate to the left.
 * 2. As you iterate to the left, every other digit is doubled (except the check digit). 
 *    If the result is greater than 9 after doubling, subtract 9 from its value.
 * 3. Sum up all the digits in the credit card number.
 * 4. If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0), 
 *    then the number is valid; otherwise, it’s invalid.
 */

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array containing all the arrays above
const batch = [
    valid1, valid2, valid3, valid4, valid5,
    invalid1, invalid2, invalid3, invalid4, invalid5,
    mystery1, mystery2, mystery3, mystery4, mystery5
];

/**
 * Validates a credit card number using the Luhn algorithm.
 * 
 * @param {number[]} array - The array representing the credit card number
 * @returns {boolean} - True if the credit card number is valid, false otherwise
 */
const validateCred = (array) => {
    let isValid = false;
    let nonMultipliedSum = 0;
    let multipliedSum = 0;
    let sum = 0;

    // Loop to get the last element and every other element that's not to be multiplied
    for (let i = array.length - 1; i > 0; i -= 2) {
        nonMultipliedSum += array[i];
    }

    // Credit array is odd, include the add the first element
    if ((array.length) % 2 !== 0) {
        nonMultipliedSum += array[0];
    }

    // Loop to get every other element to be multiplied.
    for (let i = array.length - 2; i >= 0; i -= 2) {
        if (array[i] * 2 > 9) {
            multipliedSum += (array[i] * 2) - 9;
        } else {
            multipliedSum += array[i] * 2;
        }
    }

    // Add the two sums together 
    sum = nonMultipliedSum + multipliedSum;

    // Check if sum remainder is 0
    if (sum % 10 === 0) {
        isValid = true;
    }
    return isValid;
};

/**
 * Finds and isolates all the invalid cards in the nested batch array.
 * 
 * @param {number[][]} cards - The array of credit card numbers
 * @returns {number[][]} - The array containing only the invalid credit card numbers
 */
const findInvalidCards = (cards) => {
    const invalidCards = cards.filter(items => {
        return !validateCred(items);
    });
    return invalidCards;
};

/**
 * Returns an array of companies that have mailed out cards with invalid numbers. 
 * This array should NOT contain duplicates.
 * 
 * @param {number[][]} array - The array containing only the invalid credit card numbers
 * @returns {string[]} - The array of company names with invalid cards
 */
const idInvalidCardCompanies = (array) => {
    let invalidCompanies = [];

    array.forEach(item => {
        if (item[0] === 3 && !invalidCompanies.includes('Amex')) {
            invalidCompanies.push('Amex');
        } else if (item[0] === 4 && !invalidCompanies.includes('Visa')) {
            invalidCompanies.push('Visa');
        } else if (item[0] === 5 && !invalidCompanies.includes('Mastercard')) {
            invalidCompanies.push('Mastercard');
        } else if (item[0] === 6 && !invalidCompanies.includes('Discover')) {
            invalidCompanies.push('Discover');
        } else if (![3, 4, 5, 6].includes(item[0])) {
            console.log('Company not found');
        }
    });

    return invalidCompanies;
};

// Print the array that identifies companies with invalid cards without duplicates
console.log(idInvalidCardCompanies(findInvalidCards(batch)));



