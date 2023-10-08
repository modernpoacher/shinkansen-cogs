import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import { ValueField } from '@modernpoacher/cogs/components/field'
import Field from '../index.jsx'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('@modernpoacher/cogs/components/field', () => {
  class MockField extends mockComponent {
    getClassName () { }

    shouldComponentUpdate () { }
  }

  return {
    __esModule: true,
    ValueField: class ValueField extends MockField { },
    default: MockField
  }
})

describe('@modernpoacher/cogs/cogs/select/field', () => {
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
            multiple
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

    describe('`shouldComponentUpdate()`', () => {
      const component = (
        <Field
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          description='MOCK DESCRIPTION'
          errorMessage='MOCK ERROR MESSAGE'
          value='MOCK VALUE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          multiple
          onChange={jest.fn()}>
          MOCK CHILDREN
        </Field>
      )

      let instance

      beforeEach(() => {
        /**
         *  Always return false (we're not testing conditions in `super.shouldComponentUpdate()`)
         */
        jest.spyOn(ValueField.prototype, 'shouldComponentUpdate').mockReturnValue(false)

        instance = renderer.create(component).getInstance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            name: 'MOCK CHANGE NAME',
            id: 'MOCK CHANGE ID',
            value: 'MOCK CHANGE VALUE',
            title: 'MOCK CHANGE TITLE',
            tabIndex: 0,
            accessKey: 'MOCK CHANGE ACCESS KEY',
            required: false,
            disabled: false,
            readOnly: false,
            placeholder: 'MOCK CHANGE PLACEHOLDER',
            multiple: false,
            children: 'MOCK CHANGE CHILDREN',
            onChange: expect.any(Function)
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            name: 'MOCK NAME',
            id: 'MOCK ID',
            value: 'MOCK VALUE',
            title: 'MOCK TITLE',
            tabIndex: 1,
            accessKey: 'MOCK ACCESS KEY',
            required: true,
            disabled: true,
            readOnly: true,
            placeholder: 'MOCK PLACEHOLDER',
            multiple: true,
            children: 'MOCK CHILDREN',
            onChange: expect.any(Function)
          }))
            .toBe(false)
        })
      })
    })
  })
})
