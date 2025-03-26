const {
  expect
} = require('chai')

const Description = require('#cogs/super/components/description')

describe('#cogs/super/components/description', () => {
  describe('`Description`', () => {
    it('is a function', () => {
      expect(Description)
        .to.be.a('function')
    })
  })
})
