const {
  expect
} = require('chai')

const Field = require('#cogs/cogs/select/field')

describe('#cogs/cogs/select/field', () => {
  describe('`Field`', () => {
    it('is a function', () => {
      expect(Field)
        .to.be.a('function')
    })
  })
})
