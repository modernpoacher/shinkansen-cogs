import {
  expect
} from 'chai'

import {
  errorMessage
} from '#cogs/transformers'

describe('#cogs/transformers', () => {
  describe('`errorMessage`', () => {
    it('is an object', () => {
      expect(errorMessage)
        .to.be.an('object')
    })
  })
})
