import React from 'react'
import renderer from 'react-test-renderer'

import Disabled from '#cogs/components/common/disabled'

jest.useFakeTimers()

describe('#cogs/components/common/disabled', () => {
  describe('<Disabled />', () => {
    it('renders', () => {
      return expect(renderer.create(<Disabled />).toJSON())
        .toMatchSnapshot()
    })
  })
})
