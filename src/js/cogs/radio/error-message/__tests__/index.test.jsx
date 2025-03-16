import React from 'react'
import snapshotOf from 'react-component-snapshot'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import getComponentInstanceFrom from 'react-component-instance/container'

import Super from '#cogs/components/error-message'
import ErrorMessage from '#cogs/cogs/radio/error-message'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

const MOCK_ERROR_MESSAGE = {
  type: 'UNKNOWN',
  params: {
    expectedType: 'string'
  },
  uri: '#/'
}

describe('#cogs/cogs/radio/error-message', () => {
  describe('<ErrorMessage />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: errorMessage
          }
        } = render(
          <ErrorMessage />
        )

        expect(errorMessage)
          .toBeNull()
      })

      /**
       *  Element is null
       */
      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: errorMessage
          }
        } = render(
          <ErrorMessage />
        )

        expect(snapshotOf(errorMessage))
          .toMatchSnapshot()
      })

      /**
       *  @deprecated For migration toward Testing Library
       */
      xit('matches the snapshot', () => {
        expect(renderer.create((
          <ErrorMessage />
        )).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: errorMessage
          }
        } = render(
          <ErrorMessage
            errorMessage={MOCK_ERROR_MESSAGE}
          />
        )

        expect(errorMessage)
          .toBeInstanceOf(HTMLSpanElement)
      })

      describe('Always', () => {
        it('invokes `getClassName`', () => {
          const getClassNameSpy = jest.spyOn(ErrorMessage.prototype, 'getClassName')

          render(
            <ErrorMessage
              errorMessage={MOCK_ERROR_MESSAGE}
            />
          )

          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: errorMessage
          }
        } = render(
          <ErrorMessage
            errorMessage={MOCK_ERROR_MESSAGE}
          />
        )

        expect(snapshotOf(errorMessage))
          .toMatchSnapshot()
      })

      /**
       *  @deprecated For migration toward Testing Library
       */
      xit('matches the snapshot', () => {
        expect(renderer.create((
          <ErrorMessage
            errorMessage={MOCK_ERROR_MESSAGE}
          />
        )).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      it('invokes `classnames`', () => {
        /**
         *  Ensure `super.getClassName()` returns a value
         */
        const getClassNameSpy = jest.spyOn(Super.prototype, 'getClassName').mockReturnValue('MOCK CLASSNAME')

        const {
          container
        } = render(
          <ErrorMessage
            errorMessage={MOCK_ERROR_MESSAGE}
          />
        )

        const instance = getComponentInstanceFrom(container)

        /**
         *  Ensure it is reset after render
         */
        classnames.mockClear()

        /**
         *  Ensure it is reset after render
         */
        getClassNameSpy.mockClear()

        instance.getClassName()

        expect(classnames)
          .toHaveBeenCalledWith('MOCK CLASSNAME', 'radio')
      })
    })
  })
})
