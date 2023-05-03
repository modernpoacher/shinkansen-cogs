import React from 'react'
import renderer from 'react-test-renderer'

import Component from '#components/common/required'

describe('#components/common/required', () => {
  describe('<Component />', () => {
    it('renders', () => {
      return expect(renderer.create(<Component />).toJSON())
        .toMatchSnapshot()
    })
  })
})
