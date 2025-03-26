const {
  expect
} = require('chai')

const Disabled = require('#cogs/components/common/disabled')

describe('#cogs/components/common/disabled', () => {
  describe('`Disabled`', () => {
    it('is a function', () => {
      expect(Disabled)
        .to.be.a('function')
    })
  })
})
