const {
  expect // @ts-expect-error
} = require('chai')

const Text = require('#cogs/cogs/text')

describe('#cogs/cogs/text', () => {
  describe('`Text`', () => {
    it('is a function', () => {
      expect(Text)
        .to.be.a('function')
    })
  })
})
