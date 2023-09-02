import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import { CheckField } from '@modernpoacher/cogs/components/field'
import Field from '../index.jsx'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('@modernpoacher/cogs/cogs/checkbox/field', () => {
  class MockField extends mockComponent {
    getClassName () { }
  }

  return {
    __esModule: true,
    CheckField: class CheckField extends MockField { },
    default: MockField
  }
})

describe('@modernpoacher/cogs/cogs/checkbox/field', () => {
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
        jest.spyOn(CheckField.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Field name='MOCK NAME' />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'checkbox')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})
