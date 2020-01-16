import React from 'react'
import renderer from 'react-test-renderer'

import Component from 'shinkansen-cogs/components/common/disabled'

describe('shinkansen-cogs/components/common/disabled', () => {
  describe('<Component />', () => {
    it('renders', () => {
      expect(renderer.create(<Component />).toJSON())
        .toMatchSnapshot()
    })
  })
})
