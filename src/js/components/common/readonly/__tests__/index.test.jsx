import React from 'react'
import {
  snapshotOf
} from 'react-component-snapshot'

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
  })
})
