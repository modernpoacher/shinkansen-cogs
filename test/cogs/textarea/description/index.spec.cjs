const {
  expect
} = require('chai')

const Description = require('#cogs/cogs/textarea/description')

describe('#cogs/cogs/textarea/description', () => {
  describe('`Description`', () => {
    it('is a function', () => {
      expect(Description)
        .to.be.a('function')
    })
  })
})
