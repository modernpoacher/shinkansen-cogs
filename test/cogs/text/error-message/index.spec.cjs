const {
  expect
} = require('chai')

const ErrorMessage = require('#cogs/cogs/text/error-message')

describe('#cogs/cogs/text/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
