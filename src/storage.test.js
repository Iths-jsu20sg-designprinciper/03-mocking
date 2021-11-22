require('jest')
const { store, retrieve } = require('./storage.js')

describe('storage functions', () => {

	it('returns undefined if no value stored', () => {
		const actual = retrieve()
		expect(actual).toBeUndefined()
	})
	
	it('can store a value and retrieve it', () => {
		const testData = { example: true }

		store(testData)
		const actual = retrieve()

		expect(actual).toEqual(testData)
		// toBe: === jämför referens, är det SAMMA objekt
		// toEqual: jämför innehållet, är det LIKADANA objekt
	})

	it('can store several values, remembers the last', () => {
		const testData = 'en sträng går också bra'
		store(1)
		store(false)
		store([1, 2, 3, 5])
		store(testData)
		const actual = retrieve()
		expect(actual).toEqual(testData)
	})
})

/*
2.8 Skriv testfall utifrån följande kravspec:
Det ska finnas två funktioner: store och retrieve. Funktionen store ska ta en parameter. När man anropar den ska värdet på parametern sparas. Funktionen retrieve ska inte ha några parametrar. När den anropas ska den returnera värdet som man senast sparade med store.
Exempel:
store(1)
retrieve()  // returnerar 1
store(2)
store(100)
retrieve()  // returnerar 100
*/