import {
  expect
} from 'chai'

import Title from '#cogs/cogs/email/title'

describe('#cogs/cogs/email/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
