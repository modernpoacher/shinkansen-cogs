import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import Super from '@modernpoacher/cogs/components/error-message'
import ErrorMessage from '../index.jsx'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('@modernpoacher/cogs/components/error-message', () => ({
  __esModule: true,
  default: class MockErrorMessage extends mockComponent {
    getClassName () { }

    render () {
      const { errorMessage } = this.props

      if (errorMessage) {
        return (
          <span className={this.getClassName()}>
            {errorMessage}
          </span>
        )
      }

      return null
    }
  }
}))

describe('@modernpoacher/cogs/cogs/password/error-message', () => {
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
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <ErrorMessage
            errorMessage='MOCK ERROR MESSAGE'
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(Super.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <ErrorMessage />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'password')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})
