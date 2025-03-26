const {
  expect
} = require('chai')

const {
  ValueField,
  CheckField,
  toInputValue
} = require('#cogs/components/field')

describe('#cogs/components/field', () => {
  describe('`ValueField`', () => {
    it('is a function', () => {
      expect(ValueField)
        .to.be.a('function')
    })
  })

  describe('`CheckField`', () => {
    it('is a function', () => {
      expect(CheckField)
        .to.be.a('function')
    })
  })

  describe('`toInputValue`', () => {
    it('is a function', () => {
      expect(toInputValue)
        .to.be.a('function')
    })
  })

  describe('`toInputValue()`', () => {
    describe('Value is undefined', () => {
      it('returns a string', () => {
        expect(toInputValue(undefined))
          .to.equal('')
      })
    })

    describe('Value is a string', () => {
      it('returns a string', () => {
        expect(toInputValue('string'))
          .to.equal('string')
      })
    })

    describe('Value is a number', () => {
      it('returns a string', () => {
        expect(toInputValue(0))
          .to.equal('0')
      })
    })

    describe('Value is null', () => {
      it('returns a string', () => {
        expect(toInputValue(null))
          .to.equal('null')
      })
    })

    describe('Value is a boolean', () => {
      it('returns a string', () => {
        expect(toInputValue(false))
          .to.equal('false')
      })
    })
  })
})
