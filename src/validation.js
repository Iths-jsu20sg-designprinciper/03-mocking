function isPositiveNumber(value) {
	// The bank will not work with zeroes
	if( value <= 0 ) return false;
	else if( value === Infinity ) return false;
	else if( isNaN(value) ) return false;

	return true;
}

function isValidAccountObject(account) {
	if( !account ) {
		return false
	} else if( (typeof account.id) !== 'string' ) {
		return false
	} else if( (typeof account.balance) !== 'number' ) {
		return false
	}
	return true
}


module.exports = { isPositiveNumber, isValidAccountObject }
