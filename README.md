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

Describe: doubleEveryOtherDigit()

Test: "It should double every other digit starting after the second digit from left."
Code:
const creditCardNumber = "4102080860435620";
doubleEveryOtherDigit(creditCardNumber);
Expected Output: 4, 2, 0, 4, 0, 16, 0, 16, 6, 0, 8, 3, 10, 6, 4, 0;

Test: "If the doubled digit is a double digit number, add together each digit of the double digit number."
Code:
const addDoubleDigitNumbersTogether = ['16', '16', '10'];
doubleEveryOtherDigit
