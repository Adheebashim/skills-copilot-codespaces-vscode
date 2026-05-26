function calculateNumbers(var1, var2) {
	const a = Number(var1);
	const b = Number(var2);

	if (Number.isNaN(a) || Number.isNaN(b)) {
		throw new TypeError('calculateNumbers: both arguments must be numbers');
	}

	return {
		sum: a + b,
		difference: a - b,
		product: a * b,
		quotient: b === 0 ? null : a / b,
	};
}

module.exports = { calculateNumbers };