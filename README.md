## Credit Card Validator

By Brian Scherner

#### An application that validates credit card numbers.

## Technologies Used

* Javascript
* Markdown

## Description

This application takes a credit card number from the user and then validates the credit card based on the Luhn algorithm. If it passes the Luhn algorithm, the credit card number must also be a certain number of digits, and start with a certain digit to confirm which company issued the card.

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the JS folder of the directory.
* Open js/scripts.js in your browser.

## Known Bugs

The application does not have a user interface yet. I plan to add a user interface later.

## License

MIT

Copyright (c) 2023 Brian Scherner

### Tests

1. Take in a credit card number as a string from the user.
2. Starting on the second digit from left side and moving right, double every other digit.
3. Check if the result of the doubled digit is a double digit number.
4. If the doubled digit is a double digit number, add together each digit of the double digit number.
5. Add together all of the digits in the new set of numbers.
6. Check if resulting number ends in a zero.
7. If resulting number ends in a zero, validate credit card number.
8. Identify the first digits in the credit card number.
9. If the first digits are 34 or 37, validate credit card number as American Express.
10. If the first digit is 4, validate credit card number as Visa.
11. If the first digit is 5, validate credit card number as Mastercard.
12. If the first digit is 6, validate credit card number as Discover.
13. Identify the length of digits in the credit card number.
14. If credit card number has 16 digits, validate credit card number as Visa, Mastercard, or Discover.
15. If credit card number has 15 digits, validate credit card number as American Express.

What am I putting into the function?
What am I getting out?
Why am I doing it?

Describe: doubleEveryOtherDigit()

Test: "It should double every other digit starting after the second digit from the left and return an array."
Code:
const creditCardNumber = "4102080860435620";
doubleEveryOtherDigit(creditCardNumber);
Expected Output: [4, 2, 0, 4, 0, 16, 0, 16, 6, 0, 4, 6, 5, 12, 2, 0];

Describe: addDoubleDigitNumbersTogether()

Test: "It should add the double digit numbers from an array together and return an array."
Code:
const creditCardNumberArray = [4, 2, 0, 4, 0, 16, 0, 16, 6, 0, 4, 6, 5, 12, 2, 0];
addDoubleDigitNumbersTogether(creditCardNumberArray);
Expected Output: [4, 2, 0, 4, 0, 7, 0, 7, 6, 0, 4, 6, 5, 3, 2, 0];

Describe: creditCardValidator()

Test: "It will return a string stating that the card number is not valid."
Code:
const creditCardNumber = "4102080880435620";
creditCardValidator(creditCardNumber);
Expected Output: "This card number is not valid."

Test: "It will return a string stating that the card number is valid."
Code:
const creditCardNumber = "4102080860435620";
creditCardValidator(creditCardNumber);
Expected Output: "This card number is valid."

Describe: validateBySumFinalDigit()

Test: "It will return a string stating that the card number is not valid because its last digit is not 0."
Code:
const sumToCheck = 52;
validateBySumFinalDigit(sumToCheck);
Expected Output: "This card number is not valid."

Test: "It will return a string stating that the card number is valid because its last digit is 0."
Code:
const sumToCheck = 50;
validateBySumFinalDigit(sumToCheck);
Expected Output: "This card number is valid."


Describe: confirmCreditCardCompany()

Test: "It will check if the first digits of the credit card number are 34 or 37."
Code:
const creditCardNumber = "3402080860435620";
confirmCreditCardCompany(creditCardNumber);
Expected Output: "This card number is issued by American Express."

Test: "It will check if the first digit of the credit card number is 4."
Code:
const creditCardNumber = "4102080860435620";
confirmCreditCardCompany(creditCardNumber);
Expected Output: "This card number is issued by Visa."

Test: "It will check if the first digit of the credit card number is 5."
Code:
const creditCardNumber = "5102080860435620";
confirmCreditCardCompany(creditCardNumber);
Expected Output: "This card number is issued by Mastercard."

Test: "It will check if the first digit of the credit card number is 6."
Code:
const creditCardNumber = "6102080860435620";
confirmCreditCardCompany(creditCardNumber);
Expected Output: "This card number is issued by Discover."

Test: "It will return invalid if the first digit(s) are anything other than 34, 37, 4, 5, or 6."
Code:
const creditCardNumber = "7102080860435620";
confirmCreditCardCompany(creditCardNumber);
Expected Output: "This card number is invalid."

Test: "It will check if the length of the credit card number is 16 digits and starts with 4."
Code:
const creditCardNumber = "4102080860435620";
confirmCreditCardCompany(creditCardNumber);
Expected Output: "This card number is issued by Visa."

Test: "It will check if the length of the credit card number is 16 digits and starts with 5."
Code:
const creditCardNumber = "5102080860435620";
confirmCreditCardCompany(creditCardNumber);
Expected Output: "This card number is issued by Mastercard."

Test: "It will check if the length of the credit card number is 16 digits and starts with 6."
Code:
const creditCardNumber = "6102080860435620";
confirmCreditCardCompany(creditCardNumber);
Expected Output: "This card number is issued by Discover."

Test: "It will check if the length of the credit card number is 15 digits and starts with 34 or 37."
Code:
const creditCardNumber = "342080860435620";
confirmCreditCardCompany(creditCardNumber);
Expected Output: "This card number is issued by American Express."

Test: "It will return invalid if the length of the credit card is less than 15 digits, or 17 digits or more."
Code:
const creditCardNumber = "702080860435620";
confirmCreditCardCompany(creditCardNumber);
Expected Output: "This card number is invalid."