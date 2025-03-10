const {
  expect
} = require('chai')

const ErrorMessage = require('#cogs/cogs/textarea/error-message')

describe('#cogs/cogs/textarea/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
