const {
  expect
} = require('chai')

const Description = require('#cogs/cogs/radio/description')

describe('#cogs/cogs/radio/description', () => {
  describe('`Description`', () => {
    it('is a function', () => {
      expect(Description)
        .to.be.a('function')
    })
  })
})
