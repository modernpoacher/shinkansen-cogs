import React from 'react'
import renderer from 'react-test-renderer'

import Component from '#components/common/disabled'

describe('#components/common/disabled', () => {
  describe('<Component />', () => {
    it('renders', () => {
      return expect(renderer.create(<Component />).toJSON())
        .toMatchSnapshot()
    })
  })
})
