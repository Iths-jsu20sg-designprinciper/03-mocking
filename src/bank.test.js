require('jest')
const { deposit } = require('./bank.js')

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
		
		// throws an error if amount not positive number
		// -17, Infinity, NaN
	})
})
/*
interface Account {
	id: string;
	balance: number;
}
function deposit(account: Account, amount: number): void
Ökar saldot på kontot med amount. Alla flyttal (floating point, normala JavaScript number) som rimligtvis kan tänkas motsvara ett pengabelopp är tillåtna värden. Om funktionen får ett otillåtet tal som parameter ska den kasta ett Error med ett lämpligt felmeddelande.

*/
