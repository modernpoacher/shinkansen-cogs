import {
  expect
} from 'chai'

import ErrorMessage from '#cogs/components/error-message'

describe('#cogs/components/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
