const {
  expect
} = require('chai')

const Select = require('#cogs/cogs/select')

describe('#cogs/cogs/select', () => {
  describe('`Select`', () => {
    it('is a function', () => {
      expect(Select)
        .to.be.a('function')
    })
  })
})
