const {
  expect
} = require('chai')

const ErrorMessage = require('#cogs/cogs/password/error-message')

describe('#cogs/cogs/password/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
