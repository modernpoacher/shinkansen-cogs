import React from 'react'
import renderer from 'react-test-renderer'

import Component from '#cogs/components/common/required'

jest.useFakeTimers()

describe('#cogs/components/common/required', () => {
  describe('<Component />', () => {
    it('renders', () => {
      return expect(renderer.create(<Component />).toJSON())
        .toMatchSnapshot()
    })
  })
})
