import {
  expect
} from 'chai'

import Password from '#cogs/cogs/password'

describe('#cogs/cogs/password', () => {
  describe('`Password`', () => {
    it('is a function', () => {
      expect(Password)
        .to.be.a('function')
    })
  })
})
