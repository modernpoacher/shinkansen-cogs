import {
  expect
} from 'chai'

import ErrorMessage from '#cogs/cogs/password/error-message'

describe('#cogs/cogs/password/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
