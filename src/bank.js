
function deposit(account, amount) {
	if( !isValidAccountObject(account) ) {
		throw new Error('No account object')
	}
	else if( !isPositiveNumber(amount) ) {
		throw new Error('Invalid amount')
	}
	account.balance += amount
}

function withdraw(account, amount) {
	if( !isValidAccountObject(account) ) {
		throw new Error('Invalid account object')
	}
	else if( !isPositiveNumber(amount) ) {
		throw new Error('Invalid amount')
	}
	else if( amount > account.balance ) {
		throw new Error('Not enough money in account')
	}
	account.balance -= amount
}

function transfer(source, target, amount) {
	if( !isValidAccountObject(source) ) {
		return false;
	}
	else if( !isValidAccountObject(target) ) {
		return false;
	}
	else if( !isPositiveNumber(amount) ) {
		return false;
	}
	else if( source.balance < amount ) {
		return false;
	}
	source.balance -= amount
	target.balance += amount
	return true;
}


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

module.exports = { deposit, withdraw, transfer }
