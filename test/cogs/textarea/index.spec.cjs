const {
  expect
} = require('chai')

const Textarea = require('#cogs/cogs/textarea')

describe('#cogs/cogs/textarea', () => {
  describe('`Textarea`', () => {
    it('is a function', () => {
      expect(Textarea)
        .to.be.a('function')
    })
  })
})
