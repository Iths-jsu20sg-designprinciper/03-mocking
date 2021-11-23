const { isPositiveNumber } = require('./validation.js')

function deposit(bankManager, amount) {
	if( !isPositiveNumber(amount) ) {
		throw new Error('Not a valid amount')
	}
	let currentBalance = bankManager.getBalance()
	bankManager.setBalance(currentBalance + amount)
}

function withdraw(bankManager, amount) {
	if( !isPositiveNumber(amount) ) {
		throw new Error('Not a valid amount')
	}
	let currentBalance = bankManager.getBalance()
	if( currentBalance < amount ) {
		throw new Error('Not enough money in account')
	}
	bankManager.setBalance(currentBalance - amount)
}

function transfer() {
	throw new Error('not implemented yet')
}

module.exports = { deposit, withdraw, transfer }
