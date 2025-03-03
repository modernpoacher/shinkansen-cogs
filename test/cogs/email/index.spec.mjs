import {
  expect
} from 'chai'

import Email from '#cogs/cogs/email'

describe('#cogs/cogs/email', () => {
  describe('`Email`', () => {
    it('is a function', () => {
      expect(Email)
        .to.be.a('function')
    })
  })
})
