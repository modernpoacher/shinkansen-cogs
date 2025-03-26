const {
  expect
} = require('chai')

const Field = require('#cogs/cogs/email/field')

describe('#cogs/cogs/email/field', () => {
  describe('`Field`', () => {
    it('is a function', () => {
      expect(Field)
        .to.be.a('function')
    })
  })
})
