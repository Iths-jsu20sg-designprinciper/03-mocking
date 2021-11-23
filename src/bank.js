const { isPositiveNumber, isValidAccountObject } = require('./validation.js')

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





module.exports = { deposit, withdraw, transfer }
