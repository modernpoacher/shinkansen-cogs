import React from 'react'

import {
  snapshotOf
} from 'react-component-snapshot'

import {
  getInstanceFromContainerElement
} from 'react-component-instance'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Description from '#cogs/components/description'

describe('#cogs/components/description', () => {
  describe('<Description />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: description
          }
        } = render(
          <Description />
        )

        expect(description)
          .toBeNull()
      })

      /**
       *  Element is null
       */
      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: description
          }
        } = render(
          <Description />
        )

        expect(snapshotOf(description))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: description
          }
        } = render(
          <Description
            description='MOCK DESCRIPTION'
          />
        )

        expect(description)
          .toBeInstanceOf(HTMLSpanElement)
      })

      describe('Always', () => {
        it('invokes `getClassName`', () => {
          const getClassNameSpy = jest.spyOn(Description.prototype, 'getClassName')

          render(
            <Description
              description='MOCK DESCRIPTION'
            />
          )

          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: description
          }
        } = render(
          <Description
            description='MOCK DESCRIPTION'
          />
        )

        expect(snapshotOf(description))
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      it('returns a string', () => {
        const {
          container
        } = render(
          <Description
            description='MOCK DESCRIPTION'
          />
        )

        const instance = getInstanceFromContainerElement(container)

        expect(instance.getClassName())
          .toEqual(expect.any(String))
      })
    })
  })
})
