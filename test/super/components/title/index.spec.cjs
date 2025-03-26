const {
  expect
} = require('chai')

const Title = require('#cogs/super/components/title')

describe('#cogs/super/components/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
