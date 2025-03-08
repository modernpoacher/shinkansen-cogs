import React from 'react'
import renderer from 'react-test-renderer'

import Required from '#cogs/components/common/required'

jest.useFakeTimers()

describe('#cogs/components/common/required', () => {
  describe('<Required />', () => {
    it('renders', () => {
      return expect(renderer.create(<Required />).toJSON())
        .toMatchSnapshot()
    })
  })
})
