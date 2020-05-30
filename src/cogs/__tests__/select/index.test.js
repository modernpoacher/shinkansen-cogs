import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import Title from 'shinkansen-cogs/components/title/select'
import Field from 'shinkansen-cogs/components/field/select'

import { ValueCog } from 'shinkansen-cogs/cogs'
import Cog from 'shinkansen-cogs/cogs/select'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-cogs/cogs', () => {
  class MockCog extends mockComponent {
    getClassName () { }

    getId () { }

    renderTitle () { }

    renderField () { }

    render () {
      const className = this.getClassName()

      return (
        <div className={className}>
          {this.renderTitle()}
          {this.renderField()}
        </div>
      )
    }
  }

  return {
    __esModule: true,
    ValueCog: class ValueCog extends MockCog { },
    CheckCog: class CheckCog extends MockCog { },
    default: MockCog
  }
})

jest.mock('shinkansen-cogs/components/title/select')
jest.mock('shinkansen-cogs/components/field/select')

describe('shinkansen-cogs/cogs/select', () => {
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

      describe('`renderTitle`', () => {
        it('is defined', () => {
          expect(Cog.prototype.renderTitle)
            .toBeDefined()
        })
      })

      describe('`renderField`', () => {
        it('is defined', () => {
          expect(Cog.prototype.renderField)
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
            title='MOCK TITLE'
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
          .toBeCalledWith('MOCK GETCLASSNAME', 'select')
      })

      it('returns the classname', () => {
        expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })

    describe('`renderTitle()`', () => {
      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
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

        instance.renderTitle()
      })

      it('invokes `getId`', () => {
        expect(getIdSpy)
          .toBeCalled()
      })

      it('renders `<Title />`', () => {
        expect(Title)
          .toBeCalledWith({
            id: 'MOCK ID',
            title: 'MOCK TITLE',
            disabled: true,
            required: true,
            readOnly: true
          }, {})
      })
    })

    describe('`renderField()`', () => {
      const component = (
        <Cog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
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

        instance.renderField()
      })

      it('invokes `getId`', () => {
        expect(getIdSpy)
          .toBeCalled()
      })

      it('renders `<Field />`', () => {
        expect(Field)
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
