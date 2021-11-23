require('jest')
const { deposit, withdraw } = require('./bank.js')

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

	// To do:
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
})
/*
interface Account {
	id: string;
	balance: number;
}
function withdraw(account: Account, amount: number): void
Minskar saldot på kontot med amount, förutsatt att det finns tillräckligt med pengar på kontot. Om det inte gör det ska funktionen inte dra några pengar utan i stället kasta ett Error med ett lämpligt felmeddelande. Samma sak om amount är ett otillåtet tal.

*/
