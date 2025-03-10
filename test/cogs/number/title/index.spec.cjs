const {
  expect
} = require('chai')

const Title = require('#cogs/cogs/number/title')

describe('#cogs/cogs/number/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
