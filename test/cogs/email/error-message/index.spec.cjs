const {
  expect
} = require('chai')

const ErrorMessage = require('#cogs/cogs/email/error-message')

describe('#cogs/cogs/email/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
