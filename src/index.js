module.exports = function reverse (n) {
	let str = n.toString();
	let arr = [];
	
	if (str[0] === '-') {
		for(let i = str.length; i > 0; i--) {
			arr.push(str[i]);		
		}
		let minusStr = arr.join('');
		return Number(minusStr);
	} else {
			return reverseStr = str.split('').reverse().join('');
			let result = Number(reverseStr);
			return result;
	}
}
