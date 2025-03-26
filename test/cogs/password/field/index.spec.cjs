const {
  expect
} = require('chai')

const Field = require('#cogs/cogs/password/field')

describe('#cogs/cogs/password/field', () => {
  describe('`Field`', () => {
    it('is a function', () => {
      expect(Field)
        .to.be.a('function')
    })
  })
})
