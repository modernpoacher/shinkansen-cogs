import {
  expect
} from 'chai'

import ErrorMessage from '#cogs/cogs/email/error-message'

describe('#cogs/cogs/email/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
