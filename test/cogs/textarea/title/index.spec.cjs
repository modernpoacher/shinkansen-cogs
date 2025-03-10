const {
  expect
} = require('chai')

const Title = require('#cogs/cogs/textarea/title')

describe('#cogs/cogs/textarea/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
