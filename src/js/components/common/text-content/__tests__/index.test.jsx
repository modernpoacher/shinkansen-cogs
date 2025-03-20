import React from 'react'
import {
  snapshotOf
} from 'react-component-snapshot'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import TextContent from '#cogs/components/common/text-content'

describe('#cogs/components/common/text-content', () => {
  describe('<TextContent />', () => {
    it('renders', () => {
      const {
        container: {
          firstElementChild: textContent
        }
      } = render(
        <TextContent
          textContent='MOCK TEXT CONTENT'
        />
      )

      expect(textContent)
        .toBeInstanceOf(HTMLSpanElement)
    })

    it('matches the snapshot', () => {
      const {
        container: {
          firstElementChild: textContent
        }
      } = render(
        <TextContent
          textContent='MOCK TEXT CONTENT'
        />
      )

      expect(snapshotOf(textContent))
        .toMatchSnapshot()
    })
  })
})
