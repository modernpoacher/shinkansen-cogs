import {
  expect
} from 'chai'

import {
  errorMessage
} from '#cogs/transformers'

describe('#cogs/transformers', () => {
  describe('`errorMessage`', () => {
    it('is a function', () => {
      expect(errorMessage)
        .to.be.an('object')
    })
  })
})
