import React from 'react'
import {
  snapshotOf
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Disabled from '#cogs/components/common/disabled'

describe('#cogs/components/common/disabled', () => {
  describe('<Disabled />', () => {
    it('renders', () => {
      const {
        container: {
          firstElementChild: disabled
        }
      } = render(
        <Disabled />
      )

      expect(disabled)
        .toBeInstanceOf(HTMLSpanElement)
    })

    /**
     *  @deprecated For migration toward Testing Library
     */
    it('matches the snapshot', () => {
      const {
        container: {
          firstElementChild: disabled
        }
      } = render(
        <Disabled />
      )

      expect(snapshotOf(disabled))
        .toMatchSnapshot()
    })
  })
})
