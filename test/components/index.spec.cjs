const {
  expect
} = require('chai')

const {
  Description,
  ErrorMessage,
  Field,
  Title
} = require('#cogs/components')

describe('#cogs/components', () => {
  describe('`Description`', () => {
    it('is a function', () => {
      expect(Description)
        .to.be.a('function')
    })
  })

  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })

  describe('`Field`', () => {
    it('is an object', () => {
      expect(Field)
        .to.be.an('object')
    })
  })

  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
