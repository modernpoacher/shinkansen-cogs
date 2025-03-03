import {
  expect
} from 'chai'

import ReadOnly from '#cogs/components/common/readonly'

describe('#cogs/components/common/readonly', () => {
  describe('`ReadOnly`', () => {
    it('is a function', () => {
      expect(ReadOnly)
        .to.be.a('function')
    })
  })
})
