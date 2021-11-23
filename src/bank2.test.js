require('jest')
const { deposit, withdraw, transfer } = require('./bank2.js')


describe('module BankManager', () => {

	describe('deposit', () => {
		
		it('calls getBalance and setBalance when depositing money', () => {
			callsGetBalanceAndSetBalance(25, deposit)
		})
		
		it('calls setBalance with correct value when depositing money', () => {
			const amount = 42
			const initialBalance = 18
			const expectedBalance = initialBalance + amount
			callsSetBalanceWithCorrectValue(amount, initialBalance, expectedBalance, deposit)
		})

		it('does not call any methods for invalid amount', () => {
			doesNotCallMethodsForInvalidAmount(deposit)
		})
	})



	describe('withdraw', () => {
		it('calls getBalance and setBalance when withdrawing money', () => {
			callsGetBalanceAndSetBalance(88, withdraw)
		})

		it('calls setBalance with correct value when withdrawing money', () => {
			const amount = 36
			const initialBalance = 515
			const expectedBalance = initialBalance - amount
			callsSetBalanceWithCorrectValue(amount, initialBalance, expectedBalance, withdraw)
		})

		it('does not call any methods for invalid amount', () => {
			doesNotCallMethodsForInvalidAmount(withdraw)
		})

		it('only calls getBalance if trying to withdraw more money than is in the account', () => {
			const amount = 5010
			let getBalanceMock = jest.fn( () => 1500)
			let setBalanceMock = jest.fn()
			const manager = { getBalance: getBalanceMock, setBalance: setBalanceMock }

			try {
				withdraw(manager, amount)
			} catch {}

			expect( getBalanceMock.mock.calls.length ).toBe(1)
			expect( setBalanceMock.mock.calls.length ).toBe(0)
		})
	})
})


function callsGetBalanceAndSetBalance(amount, functionUnderTest) {
	let getBalanceMock = jest.fn()
	let setBalanceMock = jest.fn()
	const manager = { getBalance: getBalanceMock, setBalance: setBalanceMock }

	functionUnderTest(manager, amount)

	expect( getBalanceMock.mock.calls.length ).toBe(1)
	expect( setBalanceMock.mock.calls.length ).toBe(1)
}
function callsSetBalanceWithCorrectValue(amount, initialBalance, expectedBalance, functionUnderTest) {
	let getBalanceMock = jest.fn( () => initialBalance )
	let setBalanceMock = jest.fn()
	const manager = { getBalance: getBalanceMock, setBalance: setBalanceMock }

	// console.log('Amount:', amount);
	functionUnderTest(manager, amount)

	const params = setBalanceMock.mock.calls[0]
	expect( params[0] ).toBe(expectedBalance)
}
function doesNotCallMethodsForInvalidAmount(functionUnderTest) {
	let m = jest.fn()
	const manager = { getBalance: m, setBalance: m }

	try {
		functionUnderTest(manager, 0)
		functionUnderTest(manager, -721)
		functionUnderTest(manager, Infinity)
		functionUnderTest(manager, NaN)
	} catch {}
	expect( m.mock.calls.length ).toBe(0)
}

/*
4.1 Banksystemet i uppgift 2.12 behöver uppdateras. I stället för att funktionerna du testar ska uppdatera bankkonton direkt, ska det göras av en annan modul: BankManager. Skriv testfall som mockar BankManager och kontrollerar att getBalance och setBalance anropas rätt antal gånger, med rätt parametrar. Använda beforeEach/beforeAll för att nollställa kontot mellan testfallen. (Vänta med transfer-funktionen till 4.2.)
import { getBalance, setBalance, emptyAccount } from 'BankManager'
// function getBalance()
// function setBalance(amount)
*/