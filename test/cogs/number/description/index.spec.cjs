const {
  expect
} = require('chai')

const Description = require('#cogs/cogs/number/description')

describe('#cogs/cogs/number/description', () => {
  describe('`Description`', () => {
    it('is a function', () => {
      expect(Description)
        .to.be.a('function')
    })
  })
})
