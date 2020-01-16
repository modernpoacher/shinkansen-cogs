import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import { CheckInput } from 'shinkansen-cogs/components/input'
import Input from 'shinkansen-cogs/components/input/radio'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-cogs/components/input', () => {
  class MockInput extends mockComponent {
    getClassName () { }
  }

  return {
    __esModule: true,
    CheckInput: class CheckInput extends MockInput { },
    default: MockInput
  }
})

describe('shinkansen-cogs/components/input/radio', () => {
  describe('<Input />', () => {
    describe('With required props', () => {
      const component = (
        <Input
          id='MOCK ID'
          name='MOCK NAME'
          value='MOCK VALUE'
        />
      )

      it('renders', () => {
        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`getClassName`', () => {
          it('is defined', () => {
            expect(Input.prototype.getClassName)
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
            expect(instance.handleClick)
              .toBeDefined()
          })
        })

        describe('`handleChange`', () => {
          it('is defined', () => {
            expect(instance.handleChange)
              .toBeDefined()
          })
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
            value='MOCK VALUE'
            required
            disabled
            readOnly
            onClick={jest.fn()}
            onChange={jest.fn()}
          />
        )

        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(CheckInput.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Input
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
        expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'radio')
      })

      it('returns the classname', () => {
        expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })

    describe('`handleClick()`', () => {
      it('invokes the `onClick` prop', () => {
        const MOCK_ONCLICK = jest.fn()

        const component = (
          <Input
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

        expect(MOCK_ONCLICK)
          .toBeCalledWith('MOCK CHECKED')
      })
    })

    describe('`handleChange()`', () => {
      it('invokes the `onChange` prop', () => {
        const MOCK_ONCHANGE = jest.fn()

        const component = (
          <Input
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

        expect(MOCK_ONCHANGE)
          .toBeCalledWith('MOCK CHECKED')
      })
    })
  })
})
