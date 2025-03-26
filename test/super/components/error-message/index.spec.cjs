const {
  expect
} = require('chai')

const ErrorMessage = require('#cogs/super/components/error-message')

describe('#cogs/super/components/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
