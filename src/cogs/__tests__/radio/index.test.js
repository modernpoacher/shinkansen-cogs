import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import Label from 'shinkansen-cogs/components/label/radio'
import Input from 'shinkansen-cogs/components/input/radio'

import { CheckCog } from 'shinkansen-cogs/cogs'
import Cog from 'shinkansen-cogs/cogs/radio'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-cogs/cogs', () => {
  class MockCog extends mockComponent {
    getClassName () { }

    getId () { }

    shouldComponentUpdate () { }

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
    CheckCog: class CheckCog extends MockCog { },
    default: MockCog
  }
})

jest.mock('shinkansen-cogs/components/label/radio')
jest.mock('shinkansen-cogs/components/input/radio')

describe('shinkansen-cogs/cogs/radio', () => {
  describe('<Cog />', () => {
    describe('With required props', () => {
      const component = (
        <Cog name='MOCK NAME' value='MOCK VALUE' />
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
            value='MOCK VALUE'
            label='MOCK LABEL'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            placeholder='MOCK PLACEHOLDER'
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
        jest.spyOn(CheckCog.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Cog name='MOCK NAME' value='MOCK VALUE' />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        returnValue = instance.getClassName()
      })

      it('does not invoke `classnames`', () => {
        expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'radio')
      })

      it('returns the classname', () => {
        expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ONCLICK = jest.fn()
      const MOCK_ONCHANGE = jest.fn()

      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          value='MOCK VALUE'
          label='MOCK LABEL'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          onClick={MOCK_ONCLICK}
          onChange={MOCK_ONCHANGE}
        />
      )

      let instance

      beforeEach(() => {
        /**
         *  Always return false (we're not testing conditions in `super.shouldComponentUpdate()`)
         */
        jest.spyOn(CheckCog.prototype, 'shouldComponentUpdate').mockReturnValue(false)

        const wrapper = shallow(component)

        instance = wrapper.instance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          expect(instance.shouldComponentUpdate({
            name: 'MOCK CHANGE NAME',
            id: 'MOCK CHANGE ID',
            value: 'MOCK CHANGE VALUE',
            label: 'MOCK CHANGE LABEL',
            tabIndex: 0,
            accessKey: 'MOCK CHANGE ACCESS KEY',
            required: false,
            disabled: false,
            readOnly: false,
            placeholder: 'MOCK CHANGE PLACEHOLDER',
            onClick: jest.fn(),
            onChange: jest.fn()
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          expect(instance.shouldComponentUpdate({ // instance.props
            name: 'MOCK NAME',
            id: 'MOCK ID',
            value: 'MOCK VALUE',
            label: 'MOCK LABEL',
            tabIndex: 1,
            accessKey: 'MOCK ACCESS KEY',
            required: true,
            disabled: true,
            readOnly: true,
            placeholder: 'MOCK PLACEHOLDER',
            onClick: MOCK_ONCLICK,
            onChange: MOCK_ONCHANGE
          }))
            .toBe(false)
        })
      })
    })

    describe('`renderLabel()`', () => {
      const MOCK_ONCLICK = jest.fn()
      const MOCK_ONCHANGE = jest.fn()

      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          value='MOCK VALUE'
          label='MOCK LABEL'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          onClick={MOCK_ONCLICK}
          onChange={MOCK_ONCHANGE}
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
      const MOCK_ONCLICK = jest.fn()
      const MOCK_ONCHANGE = jest.fn()

      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          value='MOCK VALUE'
          label='MOCK LABEL'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          onClick={MOCK_ONCLICK}
          onChange={MOCK_ONCHANGE}
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
            value: 'MOCK VALUE',
            tabIndex: 1,
            accessKey: 'MOCK ACCESS KEY',
            required: true,
            disabled: true,
            readOnly: true,
            placeholder: 'MOCK PLACEHOLDER',
            onClick: MOCK_ONCLICK,
            onChange: MOCK_ONCHANGE
          }, {})
      })
    })
  })
})
