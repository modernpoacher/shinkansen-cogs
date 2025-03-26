const {
  expect
} = require('chai')

const Description = require('#cogs/cogs/select/description')

describe('#cogs/cogs/select/description', () => {
  describe('`Description`', () => {
    it('is a function', () => {
      expect(Description)
        .to.be.a('function')
    })
  })
})
