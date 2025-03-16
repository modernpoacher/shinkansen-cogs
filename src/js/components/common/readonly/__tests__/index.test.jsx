import React from 'react'
import snapshotOf from 'react-component-snapshot'
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

    it('matches the snapshot', () => {
      const {
        container: {
          firstElementChild: readOnly
        }
      } = render(
        <ReadOnly />
      )

      expect(snapshotOf(readOnly))
        .toMatchSnapshot()
    })

    /**
     *  @deprecated For migration toward Testing Library
     */
    xit('matches the snapshot', () => {
      expect(renderer.create(<ReadOnly />).toJSON())
        .toMatchSnapshot()
    })
  })
})
