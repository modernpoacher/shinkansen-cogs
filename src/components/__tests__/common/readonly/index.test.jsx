import React from 'react'
import renderer from 'react-test-renderer'

import Component from 'shinkansen-cogs/components/common/readonly'

describe('shinkansen-cogs/components/common/readonly', () => {
  describe('<Component />', () => {
    it('renders', () => {
      return expect(renderer.create(<Component />).toJSON())
        .toMatchSnapshot()
    })
  })
})
