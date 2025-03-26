const {
  expect
} = require('chai')

const ErrorMessage = require('#cogs/components/error-message')

describe('#cogs/components/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
