const {
  expect
} = require('chai')

const Title = require('#cogs/cogs/text/title')

describe('#cogs/cogs/text/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
