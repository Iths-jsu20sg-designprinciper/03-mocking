
function deposit(account, amount) {
	if( !isValidAccountObject(account) ) {
		throw new Error('No account object')
	}
	account.balance += amount
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

module.exports = { deposit }
