import React from 'react'
import renderer from 'react-test-renderer'

import TextContent from '#cogs/components/common/text-content'

jest.useFakeTimers()

describe('#cogs/components/common/text-content', () => {
  describe('<TextContent />', () => {
    describe('With required props', () => {
      it('renders', () => {
        return expect(renderer.create(<TextContent textContent='MOCK TEXT CONTENT' />).toJSON())
          .toMatchSnapshot()
      })
    })
  })
})
