import React from 'react'
import renderer from 'react-test-renderer'

import Component from '@modernpoacher/cogs/components/common/text-content'

jest.useFakeTimers()

describe('@modernpoacher/cogs/components/common/text-content', () => {
  describe('<Component />', () => {
    describe('With required props', () => {
      it('renders', () => {
        return expect(renderer.create(<Component textContent='MOCK TEXT CONTENT' />).toJSON())
          .toMatchSnapshot()
      })
    })
  })
})
