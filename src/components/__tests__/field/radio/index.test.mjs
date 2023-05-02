import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import { CheckField } from 'shinkansen-cogs/components/field'
import Field from 'shinkansen-cogs/components/field/radio'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-cogs/components/field', () => {
  class MockField extends mockComponent {
    getClassName () { }
  }

  return {
    __esModule: true,
    CheckField: class CheckField extends MockField { },
    default: MockField
  }
})

describe('shinkansen-cogs/components/field/radio', () => {
  describe('<Field />', () => {
    describe('With required props', () => {
      const component = (
        <Field
          id='MOCK ID'
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
            shallow(component)
              .instance()
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
            id='MOCK ID'
            name='MOCK NAME'
            value='MOCK VALUE'
          />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'radio')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })

    describe('`handleClick()`', () => {
      it('invokes the `onClick` prop', () => {
        const MOCK_ONCLICK = jest.fn()

        const component = (
          <Field
            id='MOCK ID'
            name='MOCK NAME'
            value='MOCK VALUE'
            onClick={MOCK_ONCLICK}
          />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        instance.handleClick({ target: { value: 'MOCK CHECKED' } })

        return expect(MOCK_ONCLICK)
          .toBeCalledWith('MOCK CHECKED')
      })
    })

    describe('`handleChange()`', () => {
      it('invokes the `onChange` prop', () => {
        const MOCK_ONCHANGE = jest.fn()

        const component = (
          <Field
            id='MOCK ID'
            name='MOCK NAME'
            value='MOCK VALUE'
            onChange={MOCK_ONCHANGE}
          />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        instance.handleChange({ target: { value: 'MOCK CHECKED' } })

        return expect(MOCK_ONCHANGE)
          .toBeCalledWith('MOCK CHECKED')
      })
    })
  })
})
