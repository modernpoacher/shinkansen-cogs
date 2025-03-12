import React from 'react'
import renderer from 'react-test-renderer'

import ErrorMessage from '#cogs/components/error-message'

jest.useFakeTimers()

const MOCK_ERROR_MESSAGE = {
  type: 'UNKNOWN',
  params: {
    expectedType: 'string'
  },
  uri: '#/'
}

const MOCK_CHANGE_ERROR_MESSAGE = {
  type: 'UNKNOWN',
  params: {
    expectedType: 'number'
  },
  uri: '#/'
}

describe('#cogs/components/error-message', () => {
  describe('<ErrorMessage />', () => {
    describe('With required props', () => {
      const component = (
        <ErrorMessage />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(ErrorMessage.prototype.getClassName)
            .toBeDefined()
        })
      })

      describe('`shouldComponentUpdate`', () => {
        it('is defined', () => {
          return expect(ErrorMessage.prototype.shouldComponentUpdate)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <ErrorMessage
            errorMessage={MOCK_ERROR_MESSAGE}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const component = (
        <ErrorMessage
          errorMessage={MOCK_ERROR_MESSAGE}
        />
      )

      /**
       *  @type {void | null | renderer.ReactTestInstance}
       */
      let instance

      beforeEach(() => {
        instance = (
          renderer.create(component)
            .getInstance()
        )
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            errorMessage: MOCK_CHANGE_ERROR_MESSAGE
          }, {
            errorMessage: MOCK_CHANGE_ERROR_MESSAGE
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            errorMessage: MOCK_ERROR_MESSAGE
          }, {
            errorMessage: MOCK_ERROR_MESSAGE
          }))
            .toBe(false)
        })
      })
    })

    describe('`getClassName()`', () => {
      it('returns the classname', () => {
        const component = (
          <ErrorMessage />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        return expect(instance.getClassName())
          .toBe('error-message')
      })
    })
  })
})
