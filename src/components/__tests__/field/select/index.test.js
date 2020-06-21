import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import { ValueField } from 'shinkansen-cogs/components/field'
import Field from 'shinkansen-cogs/components/field/select'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-cogs/components/field', () => {
  class MockField extends mockComponent {
    getClassName () { }
  }

  return {
    __esModule: true,
    ValueField: class ValueField extends MockField { },
    default: MockField
  }
})

describe('shinkansen-cogs/components/field/select', () => {
  describe('<Field />', () => {
    describe('With required props', () => {
      const component = (
        <Field name='MOCK NAME' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Field.prototype.getClassName)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Field
            id='MOCK ID'
            name='MOCK NAME'
            title='MOCK TITLE'
            required
            disabled
            readOnly
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(ValueField.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Field name='MOCK NAME' />
        )

        const instance = (
          shallow(component)
            .instance()
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
