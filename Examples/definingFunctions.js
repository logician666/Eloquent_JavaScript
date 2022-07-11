// f: R->R; f(x) = x^2
const square = function(x) { return x**2 };

console.log(square(6));

// Simple text outputting function
const makeNoise = function() {
	console.log('Plinge!');
};

const power = function(base, exponent) {
	let result = 1;
	for (let c = 0; c < exponent; c++)
		result *= base;
	return result;
};

console.log(power(2, 10));