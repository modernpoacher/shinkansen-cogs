import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'

import classnames from 'classnames'

import Super from '@modernpoacher/cogs/components/title'
import Description from '@modernpoacher/cogs/components/title/email'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('@modernpoacher/cogs/components/title', () => ({
  __esModule: true,
  default: class MockDescription extends mockComponent {
    getClassName () { }

    renderTextContent () {}

    render () {
      const { description } = this.props

      if (description) {
        return (
          <span className={this.getClassName()}>
            {this.renderTextContent()}
          </span>
        )
      }

      return null
    }
  }
}))

describe('@modernpoacher/cogs/components/title/email', () => {
  describe('<Description />', () => {
    describe('With required props', () => {
      const component = (
        <Description id='MOCK ID' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Description.prototype.getClassName)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Description
            id='MOCK ID'
            description='MOCK DESCRIPTION'
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
          <Description id='MOCK ID' />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'email')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})
