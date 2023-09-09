import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import Super from 'shinkansen-cogs/components/description'
import Description from '../index.jsx'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-cogs/components/description', () => ({
  __esModule: true,
  default: class MockDescription extends mockComponent {
    getClassName () { }

    render () {
      const { description } = this.props

      if (description) {
        return (
          <span className={this.getClassName()}>
            {description}
          </span>
        )
      }

      return null
    }
  }
}))

describe('shinkansen-cogs/cogs/select/description', () => {
  describe('<Description />', () => {
    describe('With required props', () => {
      const component = (
        <Description />
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
          <Description />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'select')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})
