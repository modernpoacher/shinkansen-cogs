const {
  expect
} = require('chai')

const ErrorMessage = require('#cogs/cogs/checkbox/error-message')

describe('#cogs/cogs/checkbox/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
