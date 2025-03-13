import React from 'react'
import renderer from 'react-test-renderer'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import ReadOnly from '#cogs/components/common/readonly'

describe('#cogs/components/common/readonly', () => {
  describe('<ReadOnly />', () => {
    it('renders', () => {
      const {
        container: {
          firstElementChild: readOnly
        }
      } = render(
        <ReadOnly />
      )

      expect(readOnly)
        .toBeInstanceOf(HTMLSpanElement)
    })

    /**
     *  @deprecated For migration toward Testing Library
     */
    it('matches the snapshot', () => {
      expect(renderer.create(<ReadOnly />).toJSON())
        .toMatchSnapshot()
    })
  })
})
