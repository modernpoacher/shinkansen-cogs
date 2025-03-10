const {
  expect
} = require('chai')

const Field = require('#cogs/cogs/text/field')

describe('#cogs/cogs/text/field', () => {
  describe('`Field`', () => {
    it('is a function', () => {
      expect(Field)
        .to.be.a('function')
    })
  })
})
