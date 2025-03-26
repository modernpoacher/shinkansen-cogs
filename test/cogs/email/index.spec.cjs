const {
  expect
} = require('chai')

const Email = require('#cogs/cogs/email')

describe('#cogs/cogs/email', () => {
  describe('`Email`', () => {
    it('is a function', () => {
      expect(Email)
        .to.be.a('function')
    })
  })
})
