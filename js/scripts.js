const creditCardNumber = "4102080860435620";
// let creditCardNumberArray = [];

function doubleEveryOtherDigit(creditCardNumber) {
	let creditCardNumberArray = [];
	for(let index = 1; index < creditCardNumber.length; index += 2) {
		let doubledNum = creditCardNumber[index] *= 2;
		let doubledNumString = doubledNum.toString();
		// if doubledNum is more than one digit, sum them together
		if (doubledNumString.length > 1) {
			doubledNum = parseInt(doubledNumString[0]) + parseInt(doubledNumString[1]);
		}
		creditCardNumberArray.push(parseInt(creditCardNumber[index -1]));
		creditCardNumberArray.push(doubledNum);
		console.log("Credit card number array: ", creditCardNumberArray);
	}
	return creditCardNumberArray;
}

function addDoubleDigitNumbers(number) {
	const doubleDigitNumbers = ['16', '16' , '10'];
}

console.log("New credit card number: ", doubleEveryOtherDigit(creditCardNumber));