const {
  expect // @ts-expect-error
} = require('chai')

const Description = require('#cogs/cogs/password/description')

describe('#cogs/cogs/password/description', () => {
  describe('`Description`', () => {
    it('is a function', () => {
      expect(Description)
        .to.be.a('function')
    })
  })
})
