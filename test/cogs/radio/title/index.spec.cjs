const {
  expect
} = require('chai')

const Title = require('#cogs/cogs/radio/title')

describe('#cogs/cogs/radio/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
