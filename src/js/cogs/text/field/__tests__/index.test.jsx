import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import {
  ValueField
} from '#cogs/components/field'
import Field from '#cogs/cogs/text/field'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('#cogs/components/field', () => {
  class MockField extends mockComponent {
    getClassName () {
      return 'MOCK CLASSNAME'
    }
  }

  return {
    __esModule: true,
    ValueField: MockField,
    toInputValue () {
      return 'MOCK VALUE'
    }
  }
})

describe('#cogs/cogs/text/field', () => {
  const MOCK_FIELD_REF = { current: null }

  describe('<Field />', () => {
    describe('With required props', () => {
      const component = (
        <Field
          name='MOCK NAME'
        />
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
      describe('Value is a string', () => {
        it('renders', () => {
          const component = (
            <Field
              id='MOCK ID'
              name='MOCK NAME'
              title='MOCK TITLE'
              value='MOCK VALUE'
              required
              disabled
              readOnly
              fieldRef={MOCK_FIELD_REF}
            />
          )

          return expect(renderer.create(component).toJSON())
            .toMatchSnapshot()
        })
      })

      describe('Default value is a string', () => {
        it('renders', () => {
          const component = (
            <Field
              id='MOCK ID'
              name='MOCK NAME'
              title='MOCK TITLE'
              defaultValue='MOCK DEFAULT VALUE'
              required
              disabled
              readOnly
              fieldRef={MOCK_FIELD_REF}
            />
          )

          return expect(renderer.create(component).toJSON())
            .toMatchSnapshot()
        })
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(ValueField.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Field
            name='MOCK NAME'
          />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        return expect(classnames)
          .toHaveBeenCalledWith('MOCK GETCLASSNAME', 'text')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })
  })
})
