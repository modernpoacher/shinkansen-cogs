import React from 'react'
import renderer from 'react-test-renderer'

import Component from '@modernpoacher/cogs/components/common/disabled'

jest.useFakeTimers()

describe('@modernpoacher/cogs/components/common/disabled', () => {
  describe('<Component />', () => {
    it('renders', () => {
      return expect(renderer.create(<Component />).toJSON())
        .toMatchSnapshot()
    })
  })
})
