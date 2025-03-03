import {
  expect
} from 'chai'

import Cog from '#cogs/super/cogs'

describe('#cogs/super/cogs', () => {
  describe('`Cog`', () => {
    it('is a function', () => {
      expect(Cog)
        .to.be.a('function')
    })
  })
})
