import React from 'react'
import renderer from 'react-test-renderer'

import ReadOnly from '#cogs/components/common/readonly'

jest.useFakeTimers()

describe('#cogs/components/common/readonly', () => {
  describe('<ReadOnly />', () => {
    it('renders', () => {
      return expect(renderer.create(<ReadOnly />).toJSON())
        .toMatchSnapshot()
    })
  })
})
