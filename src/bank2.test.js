require('jest')
const { deposit, withdraw, transfer } = require('./bank2.js')


describe('module BankManager', () => {

	describe('deposit', () => {
		
		it('calls getBalance and setBalance when depositing money', () => {
			const amount = 25
			let getBalanceMock = jest.fn()
			let setBalanceMock = jest.fn()
			const manager = { getBalance: getBalanceMock, setBalance: setBalanceMock }

			deposit(manager, amount)

			expect( getBalanceMock.mock.calls.length ).toBe(1)
			expect( setBalanceMock.mock.calls.length ).toBe(1)
		})
		
		it('calls setBalance with correct value when depositing money', () => {
			const amount = 42
			const initialBalance = 18
			const expectedBalance = initialBalance + amount
			let getBalanceMock = jest.fn( () => initialBalance )
			let setBalanceMock = jest.fn()
			const manager = { getBalance: getBalanceMock, setBalance: setBalanceMock }

			deposit(manager, amount)

			const params = setBalanceMock.mock.calls[0]
			expect( params[0] ).toBe(expectedBalance)
		})

		it('does not call any methods for invalid amount', () => {
			let m = jest.fn()
			const manager = { getBalance: m, setBalance: m }

			try {
				deposit(manager, 0)
			} catch {}
			expect( m.mock.calls.length ).toBe(0)
		})

	})
})
/*
4.1 Banksystemet i uppgift 2.12 behöver uppdateras. I stället för att funktionerna du testar ska uppdatera bankkonton direkt, ska det göras av en annan modul: BankManager. Skriv testfall som mockar BankManager och kontrollerar att getBalance och setBalance anropas rätt antal gånger, med rätt parametrar. Använda beforeEach/beforeAll för att nollställa kontot mellan testfallen. (Vänta med transfer-funktionen till 4.2.)
import { getBalance, setBalance, emptyAccount } from 'BankManager'
// function getBalance()
// function setBalance(amount)
*/