import {
  expect
} from 'chai'

import {
  ValueCog,
  CheckCog
} from '#cogs/cogs'

describe('#cogs/cogs', () => {
  describe('`ValueCog`', () => {
    it('is a function', () => {
      expect(ValueCog)
        .to.be.a('function')
    })
  })

  describe('`CheckCog`', () => {
    it('is a function', () => {
      expect(CheckCog)
        .to.be.a('function')
    })
  })
})
