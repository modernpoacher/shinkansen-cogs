const {
  expect
} = require('chai')

const Description = require('#cogs/cogs/checkbox/description')

describe('#cogs/cogs/checkbox/description', () => {
  describe('`Description`', () => {
    it('is a function', () => {
      expect(Description)
        .to.be.a('function')
    })
  })
})
