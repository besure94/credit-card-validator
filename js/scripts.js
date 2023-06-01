const creditCardNumber = "4102080860435620";
// let creditCardNumberArray = [];

// function doubleEveryOtherDigit(creditCardNumber) {
// 	let creditCardNumberArray = [];
// 	for(let index = 1; index < creditCardNumber.length; index += 2) {
// 		let doubledNum = creditCardNumber[index] *= 2;

// doubledNumString is used when checking doubleDigitNumber for step 4 on README
// 		let doubledNumString = doubledNum.toString();
// 		// if doubledNum is more than one digit, sum them together
// 		if (doubledNumString.length > 1) {
// 			doubledNum = parseInt(doubledNumString[0]) + parseInt(doubledNumString[1]);
// 		}
// doubledNumString is used when checking doubleDigitNumber for step 4 on README

// 		creditCardNumberArray.push(parseInt(creditCardNumber[index -1]));
// 		creditCardNumberArray.push(doubledNum);
// 		console.log("Credit card number array: ", creditCardNumberArray);
// 	}
// 	return creditCardNumberArray;
// }

function doubleEveryOtherDigit(creditCardNumber) {
	let creditCardNumberArray = [];
	for (let index = 1; index < creditCardNumber.length; index += 2) {
		let doubledNum = creditCardNumber[index] * 2;
		creditCardNumberArray.push(parseInt(creditCardNumber[index -1]));
		creditCardNumberArray.push(doubledNum);
	}
	return creditCardNumberArray;
}

console.log("Doubled every other digit array: ", doubleEveryOtherDigit(creditCardNumber));

function addDoubleDigitNumbersTogether(doubledCreditCardNumberArray) {
	let newCreditCardNumberArray = [];
	doubledCreditCardNumberArray.forEach(function(number) {
		let doubledNumString = number.toString();
		if (doubledNumString.length > 1) {
			let sum = parseInt(doubledNumString[0]) + parseInt(doubledNumString[1]);
			newCreditCardNumberArray.push(sum);
		} else {
			newCreditCardNumberArray.push(number);
		}
	});
	return newCreditCardNumberArray;
}

console.log("New credit card number: ", addDoubleDigitNumbersTogether(doubleEveryOtherDigit(creditCardNumber)));

function creditCardValidator(creditCardNumber) {
	let doubleDigitArray = doubleEveryOtherDigit(creditCardNumber);
	let finalDoubleDigitArray = addDoubleDigitNumbersTogether(doubleDigitArray);
	let sumOfAllDigits = 0;
	for (let index = 0; index < finalDoubleDigitArray.length; index++) {
		sumOfAllDigits += finalDoubleDigitArray[index];
		console.log("Number: ", finalDoubleDigitArray[index]);
		console.log("Sum: ", sumOfAllDigits);
		console.log("------------");
	}
	return sumOfAllDigits;
}

console.log("Sum of all digits: ", creditCardValidator(creditCardNumber));

// console.log("New credit card number: ", doubleEveryOtherDigit(creditCardNumber));