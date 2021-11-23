require('jest')
const { deposit, withdraw, transfer } = require('./bank.js')

describe('Bank methods', () => {
	describe('deposit', () => {

		it('adds money to account', () => {
			let account = { id: 'wretytyui', balance: 150 }
			const amount = 25
			deposit(account, amount)
			expect( account.balance ).toBe( 175 )
		})
		
		it('throws an error if invalid account object', () => {
			// Normalt sett bör man ha 1 expect per testfall
			expect( () => deposit(null, 37) ).toThrow()
			expect( () => deposit({}, 37) ).toThrow()
			expect( () => deposit({ id: '123ewrr'}, 37) ).toThrow()
			expect( () => deposit({ balance: 454 }, 37) ).toThrow()
		})
		
		it('throws an error if amount not positive number', () => {
			// -17, Infinity, NaN, 0
			const validAccount = { id: 'zxcvbnm,.', balance: 275.5 }
			expect( () => deposit(validAccount, -17) ).toThrow()
			expect( () => deposit(validAccount, Infinity) ).toThrow()
			expect( () => deposit(validAccount, NaN) ).toThrow()
			expect( () => deposit(validAccount, 0) ).toThrow()

			// noll är ett gränsvärde - gränser bör kontrolleras extra noga
		})
	})

	describe('withdraw', () => {
		it('removes money from account', () => {
			const startingBalance = 140
			let account = { id: 'onmiunuyb', balance: startingBalance }
			const amount = 35
			withdraw(account, amount)
			expect( account.balance ).toBe(startingBalance - amount)
		})

		it('throws an error if invalid account object', () => {
			expect( () => withdraw(null, 37) ).toThrow('account')
			expect( () => withdraw({}, 37) ).toThrow('account')
			expect( () => withdraw({ id: '123ewrr'}, 37) ).toThrow('account')
			expect( () => withdraw({ balance: 454 }, 37) ).toThrow('account')
		})

		it('throws an error if amount not positive number', () => {
			// -17, Infinity, NaN, 0
			const validAccount = { id: 'zxcvbnm,.', balance: 275.5 }
			expect( () => withdraw(validAccount, -17) ).toThrow('amount')
			expect( () => withdraw(validAccount, Infinity) ).toThrow('amount')
			expect( () => withdraw(validAccount, NaN) ).toThrow('amount')
			expect( () => withdraw(validAccount, 0) ).toThrow('amount')

			// noll är ett gränsvärde - gränser bör kontrolleras extra noga
		})

		it('throws an error if amount is greater than the account balance', () => {
			const account = { id: 'yurihnvidmr', balance: 360 }
			const tooMuch = account.balance + 1
			expect( () => withdraw(account, tooMuch) ).toThrow('Not enough money')
		})
	})

	describe('transfer', () => {
		it('transfers money between two accounts', () => {
			// Arrange
			const source = { id: 'ywuieropyt', balance: 1230 }
			const target = { id: 'oiuedcvbn', balance: 100 }
			const transferAmount = 130
			const expectedSourceBalance = source.balance - transferAmount
			const expectedTargetBalance = target.balance + transferAmount
			
			// Act
			const isSuccessful = transfer(source, target, transferAmount)
			const actualSourceBalance = source.balance
			const actualTargetBalance = target.balance

			// Assert
			expect(isSuccessful).toBe(true)
			expect(actualSourceBalance).toBe(expectedSourceBalance)
			expect(actualTargetBalance).toBe(expectedTargetBalance)
		})

		it('returns false for invalid source account', () => {
			const target = { id: 'ufhjd84', balance: 123 }
			const amount = 50

			expect( transfer(null, target, amount) ).toBe(false)
			expect( transfer({ balance: 12 }, target, amount) ).toBe(false)
			expect( transfer({ id: '456g5' }, target, amount) ).toBe(false)
		})

		it('returns false for invalid target account', () => {
			const source = { id: 'vsehudjridm', balance: 949 }
			const amount = 64

			expect( transfer(source, null, amount) ).toBe(false)
			expect( transfer(source, { balance: 758 }, amount) ).toBe(false)
			expect( transfer(source, { id: 'mitk9g95g9' }, amount) ).toBe(false)
		})

		it('returns false for invalid amount', () => {
			const source = { id: 'fkjw8f3j48', balance: 234 }
			const target = { id: 'oyirnes', balance: 765 }

			expect( transfer(source, target, 0) ).toBe(false)
			expect( transfer(source, target, -75) ).toBe(false)
			expect( transfer(source, target, Infinity) ).toBe(false)
			expect( transfer(source, target, NaN) ).toBe(false)
		})
		
		it('returns false if not enough money on sender account', () => {
			const source = { id: 'fijeufe', balance: 345 }
			const target = { id: 'uejfs', balance: 10 }
			const amount = source.balance + 1

			expect( transfer(source, target, amount) ).toBe(false)
		})
	})
})
/*
interface Account {
	id: string;
	balance: number;
}
function transfer(source: Account, target: Account, amount: number): boolean
Genomför en transaktion: Minskar saldot på kontot med amount och ökar med motsvarande belopp på mottagarkontot, förutsatt att inget har gått fel. Om transaktionen misslyckas ska funktionen returnera false. Tips: det kan bli fel av flera anledningar.


*/
