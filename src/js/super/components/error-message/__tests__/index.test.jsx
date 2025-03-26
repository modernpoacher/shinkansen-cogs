/**
 *  @typedef {CogsTypes.Super.Components.ErrorMessage.ErrorMessageProps} ErrorMessageProps
 *  @typedef {CogsTypes.Super.Components.ErrorMessage.ErrorMessageState} ErrorMessageState
 */

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

import ErrorMessage from '#cogs/super/components/error-message'

const MOCK_CHANGED_ERROR_MESSAGE = {
  type: 'UNKNOWN',
  params: {
    expectedType: 'number'
  },
  uri: '#/'
}

describe('#cogs/super/components/error-message', () => {
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
    })

    describe('With additional props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: errorMessage
          }
        } = render(
          <ErrorMessage
            errorMessage='MOCK ERROR MESSAGE'
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
              errorMessage='MOCK ERROR MESSAGE'
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
            errorMessage='MOCK ERROR MESSAGE'
          />
        )

        expect(snapshotOf(errorMessage))
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      /**
       *  @type {undefined | Component<ErrorMessageProps, ErrorMessageState>}
       */
      let instance

      beforeEach(() => {
        const {
          container
        } = render(
          <ErrorMessage
            errorMessage='MOCK ERROR MESSAGE'
          />
        )

        instance = getInstanceFromContainerElement(container)
      })

      describe('`props` have changed', () => {
        describe('Prop `errorMessage` has changed', () => {
          it('returns true', () => {
            const {
              props,
              state
            } = instance

            expect(instance.shouldComponentUpdate(
              {
                ...props,
                errorMessage: MOCK_CHANGED_ERROR_MESSAGE
              },
              {
                ...state,
                errorMessage: MOCK_CHANGED_ERROR_MESSAGE
              }
            ))
              .toBe(true)
          })
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          const {
            props,
            state
          } = instance

          expect(instance.shouldComponentUpdate(
            {
              ...props,
              errorMessage: 'MOCK ERROR MESSAGE'
            },
            {
              ...state,
              errorMessage: 'MOCK ERROR MESSAGE'
            }
          ))
            .toBe(false)
        })
      })
    })

    describe('`getClassName()`', () => {
      it('returns a string', () => {
        const {
          container
        } = render(
          <ErrorMessage
            errorMessage='MOCK ERROR MESSAGE'
          />
        )

        const instance = getInstanceFromContainerElement(container)

        expect(instance.getClassName())
          .toEqual(expect.any(String))
      })
    })
  })
})
