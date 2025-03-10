const {
  expect
} = require('chai')

const Number = require('#cogs/cogs/number')

describe('#cogs/cogs/number', () => {
  describe('`Number`', () => {
    it('is a function', () => {
      expect(Number)
        .to.be.a('function')
    })
  })
})
