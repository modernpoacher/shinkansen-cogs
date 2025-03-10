const {
  expect
} = require('chai')

const Title = require('#cogs/cogs/email/title')

describe('#cogs/cogs/email/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
