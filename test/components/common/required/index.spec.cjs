const {
  expect
} = require('chai')

const Required = require('#cogs/components/common/required')

describe('#cogs/components/common/required', () => {
  describe('`Required`', () => {
    it('is a function', () => {
      expect(Required)
        .to.be.a('function')
    })
  })
})
