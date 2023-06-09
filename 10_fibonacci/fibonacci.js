const fibonacci = function(count) {
	if (count < 0) return "OOPS"
	const fib = [0, 1];
	for (let i = 1; i < count; i++) {
		fib.push(fib[i] + fib[i -1]);
	}
	return fib[count];
};

// Do not edit below this line
module.exports = fibonacci;
