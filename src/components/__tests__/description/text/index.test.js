import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import Super from 'shinkansen-cogs/components/title'
import Description from 'shinkansen-cogs/components/title/text'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-cogs/components/title', () => ({
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

describe('shinkansen-cogs/components/title/text', () => {
  describe('<Description />', () => {
    describe('With required props', () => {
      const component = (
        <Description id='MOCK ID' />
      )

      it('renders', () => {
        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          expect(Description.prototype.getClassName)
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

        expect(renderer.create(component).toJSON())
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
          shallow(component)
            .instance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'text')
      })

      it('returns the classname', () => {
        expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})
