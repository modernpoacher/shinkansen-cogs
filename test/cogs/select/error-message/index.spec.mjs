import {
  expect
} from 'chai'

import ErrorMessage from '#cogs/cogs/select/error-message'

describe('#cogs/cogs/select/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
