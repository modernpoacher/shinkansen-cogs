import React from 'react'
import renderer from 'react-test-renderer'

import Component from '#components/common/readonly'

describe('#components/common/readonly', () => {
  describe('<Component />', () => {
    it('renders', () => {
      return expect(renderer.create(<Component />).toJSON())
        .toMatchSnapshot()
    })
  })
})
