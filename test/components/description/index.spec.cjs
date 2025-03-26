const {
  expect
} = require('chai')

const Description = require('#cogs/components/description')

describe('#cogs/components/description', () => {
  describe('`Description`', () => {
    it('is a function', () => {
      expect(Description)
        .to.be.a('function')
    })
  })
})
