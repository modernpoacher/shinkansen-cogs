const {
  expect
} = require('chai')

const ErrorMessage = require('#cogs/cogs/radio/error-message')

describe('#cogs/cogs/radio/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
