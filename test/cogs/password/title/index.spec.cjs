const {
  expect
} = require('chai')

const Title = require('#cogs/cogs/password/title')

describe('#cogs/cogs/password/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
