const {
  expect
} = require('chai')

const Title = require('#cogs/cogs/select/title')

describe('#cogs/cogs/select/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
