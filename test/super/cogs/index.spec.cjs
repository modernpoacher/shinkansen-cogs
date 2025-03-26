const {
  expect
} = require('chai')

const Cog = require('#cogs/super/cogs')

describe('#cogs/super/cogs', () => {
  describe('`Cog`', () => {
    it('is a function', () => {
      expect(Cog)
        .to.be.a('function')
    })
  })
})
