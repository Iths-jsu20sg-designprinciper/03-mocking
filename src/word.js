
function isWord(word) {
	if( (typeof word) !== 'string' ) {
		return false
	} else if( word === '' ) {
		return false
	} else if( !stringHasOnlyLetters(word) ) {
		return false
	}
	return true
}

function stringHasOnlyLetters(string) {
	for( let i=0; i<string.length; i++ ) {
		if( !isLetter(string[i]) )
			return false;
	}
	return true
}
function isLetter(x) {
	const letters = 'abcdefghijklmnopqrstuvwxyzåäö'
	return letters.includes(x.toLowerCase())
}

module.exports = { isWord }
