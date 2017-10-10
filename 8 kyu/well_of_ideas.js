function well(array) {
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === 'good') {
			count++;
		}
	}
	return count > 2 ? 'I smell a series!' : count >= 1 ? 'Publish!' : 'Fail!';
}