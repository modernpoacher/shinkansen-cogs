import {
  expect
} from 'chai'

import Title from '#cogs/components/title'

describe('#cogs/components/title', () => {
  describe('`Title`', () => {
    it('is a function', () => {
      expect(Title)
        .to.be.a('function')
    })
  })
})
