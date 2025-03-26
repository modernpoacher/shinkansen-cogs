const {
  expect
} = require('chai')

const TextContent = require('#cogs/components/common/text-content')

describe('#cogs/components/common/text-content', () => {
  describe('`TextContent`', () => {
    it('is a function', () => {
      expect(TextContent)
        .to.be.a('function')
    })
  })
})
