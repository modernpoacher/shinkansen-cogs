import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import { ValueInput } from 'shinkansen-cogs/components/input'
import Input from 'shinkansen-cogs/components/input/number'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-cogs/components/input', () => {
  class MockInput extends mockComponent {
    getClassName () { }
  }

  return {
    __esModule: true,
    ValueInput: class ValueInput extends MockInput { },
    default: MockInput
  }
})

describe('shinkansen-cogs/components/input/number', () => {
  describe('<Input />', () => {
    describe('With required props', () => {
      const component = (
        <Input name='MOCK NAME' />
      )

      it('renders', () => {
        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          expect(Input.prototype.getClassName)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Input
            id='MOCK ID'
            name='MOCK NAME'
            label='MOCK LABEL'
            required
            disabled
            readOnly
          />
        )

        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(ValueInput.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Input name='MOCK NAME' />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'number')
      })

      it('returns the classname', () => {
        expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})
