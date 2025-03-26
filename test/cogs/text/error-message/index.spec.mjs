import {
  expect
} from 'chai'

import ErrorMessage from '#cogs/cogs/text/error-message'

describe('#cogs/cogs/text/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
