require('jest')
const { isWord } = require('./word.js')

describe('isWord', () => {

	it('returns true if parameter is a word', () => {
		const expected = true
		const testData = 'badboll'
		const actual = isWord(testData)
		expect(actual).toBe(expected)
	})

	it('returns false if parameter is not a string', () => {
		// Arrange
		const expected = false
		const testData = 123

		// Act
		const actual = isWord(testData)

		// Assert
		expect(actual).toBe(expected)
	})

	it('returns false if string is empty', () => {
		const expected = false
		const testData = ''
		const actual = isWord(testData)
		expect(actual).toBe(expected)
	})

	it('returns false if a non-letter character exists', () => {
		const expected = false
		const testData = 'Pe1e'
		const actual = isWord(testData)
		expect(actual).toBe(expected)
	})
})

/*
2.6b* Ett nytt kriterium: för varje vokal ska strängen innehålla 1-3 konsonanter.
*/
