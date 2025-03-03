import {
  expect
} from 'chai'

import {
  ValueField,
  CheckField
} from '#cogs/components/field'

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
})
