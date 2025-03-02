const removeFromArray = function(array, ...args) {
	let ret = [];
	for (const item of array) {
		if (!args.includes(item)) {
			ret.push(item);
		}
	}
	return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
