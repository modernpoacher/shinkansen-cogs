import {
  expect
} from 'chai'

import ErrorMessage from '#cogs/cogs/number/error-message'

describe('#cogs/cogs/number/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
