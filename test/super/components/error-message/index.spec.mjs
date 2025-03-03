import {
  expect
} from 'chai'

import ErrorMessage from '#cogs/super/components/error-message'

describe('#cogs/super/components/error-message', () => {
  describe('`ErrorMessage`', () => {
    it('is a function', () => {
      expect(ErrorMessage)
        .to.be.a('function')
    })
  })
})
