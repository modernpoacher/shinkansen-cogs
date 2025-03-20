import React from 'react'
import {
  snapshotOf
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Required from '#cogs/components/common/required'

describe('#cogs/components/common/required', () => {
  describe('<Required />', () => {
    it('renders', () => {
      const {
        container: {
          firstElementChild: required
        }
      } = render(
        <Required />
      )

      expect(required)
        .toBeInstanceOf(HTMLSpanElement)
    })

    it('matches the snapshot', () => {
      const {
        container: {
          firstElementChild: required
        }
      } = render(
        <Required />
      )

      expect(snapshotOf(required))
        .toMatchSnapshot()
    })
  })
})
