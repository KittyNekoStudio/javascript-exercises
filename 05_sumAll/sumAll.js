const sumAll = function(start, end) {
	if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
		return "ERROR";
	}

	let ret = 0;
	for (let i = (start > end ? end : start); i <= (start > end ? start : end); i++) {
		ret += i;
	}

	return ret;
};

// Do not edit below this line
module.exports = sumAll;
