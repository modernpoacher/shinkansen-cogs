const {
  expect
} = require('chai')

const ErrorMessage = require('#cogs/cogs/number/error-message')

describe('#cogs/cogs/number/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
