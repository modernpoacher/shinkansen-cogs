import {
  expect
} from 'chai'

import {
  Description,
  ErrorMessage,
  Field,
  Title
} from '#cogs/super/components'

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
    it('is a function', () => {
      expect(Field)
        .to.be.a('function')
    })
  })

  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
