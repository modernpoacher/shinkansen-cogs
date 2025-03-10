const {
  expect
} = require('chai')

const ErrorMessage = require('#cogs/cogs/select/error-message')

describe('#cogs/cogs/select/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
