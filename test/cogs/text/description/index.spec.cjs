const {
  expect
} = require('chai')

const Description = require('#cogs/cogs/text/description')

describe('#cogs/cogs/text/description', () => {
  describe('`Description`', () => {
    it('is a function', () => {
      expect(Description)
        .to.be.a('function')
    })
  })
})
