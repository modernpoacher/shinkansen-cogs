import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import { CheckField } from '#cogs/components/field'
import Field from '#cogs/cogs/checkbox/field'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('#cogs/components/field', () => {
  class MockField extends mockComponent {
    getClassName () {
      return 'MOCK CLASSNAME'
    }

    handleChange () { }

    handleClick () { }
  }

  return {
    __esModule: true,
    CheckField: class CheckField extends MockField { },
    default: MockField
  }
})

describe('#cogs/cogs/checkbox/field', () => {
  describe('<Field />', () => {
    describe('With required props', () => {
      const component = (
        <Field
          name='MOCK NAME'
          value='MOCK VALUE'
        />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`getClassName`', () => {
          it('is defined', () => {
            return expect(Field.prototype.getClassName)
              .toBeDefined()
          })
        })
      })

      describe('Instance', () => {
        let instance

        beforeEach(() => {
          instance = (
            renderer.create(component)
              .getInstance()
          )
        })

        describe('`handleClick`', () => {
          it('is defined', () => {
            return expect(instance.handleClick)
              .toBeDefined()
          })
        })

        describe('`handleChange`', () => {
          it('is defined', () => {
            return expect(instance.handleChange)
              .toBeDefined()
          })
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
            value='MOCK VALUE'
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
          <Field
            name='MOCK NAME'
            value='MOCK VALUE'
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
          .toBeCalledWith('MOCK GETCLASSNAME', 'checkbox')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })

    describe('`handleClick()`', () => {
      it('invokes the `onClick` prop', () => {
        const MOCK_ON_CLICK = jest.spyOn(CheckField.prototype, 'handleClick')

        const component = (
          <Field
            name='MOCK NAME'
            value='MOCK VALUE'
            onClick={MOCK_ON_CLICK}
          />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.handleClick({ target: { value: 'MOCK VALUE', checked: 'MOCK CHECKED' } })

        return expect(MOCK_ON_CLICK)
          .toBeCalledWith({ target: { value: 'MOCK VALUE', checked: 'MOCK CHECKED' } })
      })
    })

    describe('`handleChange()`', () => {
      it('invokes the `onChange` prop', () => {
        const MOCK_ON_CHANGE = jest.spyOn(CheckField.prototype, 'handleChange')

        const component = (
          <Field
            name='MOCK NAME'
            value='MOCK VALUE'
            onChange={MOCK_ON_CHANGE}
          />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.handleChange({ target: { value: 'MOCK VALUE', checked: 'MOCK CHECKED' } })

        return expect(MOCK_ON_CHANGE)
          .toBeCalledWith({ target: { value: 'MOCK VALUE', checked: 'MOCK CHECKED' } })
      })
    })
  })
})
