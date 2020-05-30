import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import Label from 'shinkansen-cogs/components/label/text'
import Input from 'shinkansen-cogs/components/input/text'

import { ValueCog } from 'shinkansen-cogs/cogs'
import Cog from 'shinkansen-cogs/cogs/text'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-cogs/cogs', () => {
  class MockCog extends mockComponent {
    getClassName () { }

    getId () { }

    renderLabel () { }

    renderInput () { }

    render () {
      const className = this.getClassName()

      return (
        <div className={className}>
          {this.renderLabel()}
          {this.renderInput()}
        </div>
      )
    }
  }

  return {
    __esModule: true,
    ValueCog: class ValueCog extends MockCog { },
    default: MockCog
  }
})

jest.mock('shinkansen-cogs/components/label/text')
jest.mock('shinkansen-cogs/components/input/text')

describe('shinkansen-cogs/cogs/text', () => {
  describe('<Cog />', () => {
    describe('With required props', () => {
      const component = (
        <Cog name='MOCK NAME' />
      )

      it('renders', () => {
        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          expect(Cog.prototype.getClassName)
            .toBeDefined()
        })
      })

      describe('`renderLabel`', () => {
        it('is defined', () => {
          expect(Cog.prototype.renderLabel)
            .toBeDefined()
        })
      })

      describe('`renderInput`', () => {
        it('is defined', () => {
          expect(Cog.prototype.renderInput)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Cog
            name='MOCK NAME'
            id='MOCK ID'
            label='MOCK LABEL'
            value='MOCK VALUE'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            placeholder='MOCK PLACEHOLDER'
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
        jest.spyOn(ValueCog.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Cog name='MOCK NAME' />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        returnValue = instance.getClassName()
      })

      it('does not invoke `classnames`', () => {
        expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'text')
      })

      it('returns the classname', () => {
        expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })

    describe('`renderLabel()`', () => {
      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          label='MOCK LABEL'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
        />
      )

      let instance

      let getIdSpy

      beforeEach(() => {
        jest.clearAllMocks()

        const wrapper = mount(component)

        instance = wrapper.instance()

        getIdSpy = jest.spyOn(Cog.prototype, 'getId').mockReturnValue('MOCK ID')

        instance.renderLabel()
      })

      it('invokes `getId`', () => {
        expect(getIdSpy)
          .toBeCalled()
      })

      it('renders `<Label />`', () => {
        expect(Label)
          .toBeCalledWith({
            id: 'MOCK ID',
            label: 'MOCK LABEL',
            disabled: true,
            required: true,
            readOnly: true
          }, {})
      })
    })

    describe('`renderInput()`', () => {
      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          label='MOCK LABEL'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          onChange={jest.fn()}
        />
      )

      let instance

      let getIdSpy

      beforeEach(() => {
        jest.clearAllMocks()

        const wrapper = mount(component)

        instance = wrapper.instance()

        getIdSpy = jest.spyOn(Cog.prototype, 'getId')

        instance.renderInput()
      })

      it('invokes `getId`', () => {
        expect(getIdSpy)
          .toBeCalled()
      })

      it('renders `<Input />`', () => {
        expect(Input)
          .toBeCalledWith({
            name: 'MOCK NAME',
            id: 'MOCK ID',
            tabIndex: 1,
            accessKey: 'MOCK ACCESS KEY',
            required: true,
            disabled: true,
            readOnly: true,
            placeholder: 'MOCK PLACEHOLDER',
            onChange: expect.any(Function)
          }, {})
      })
    })
  })
})
