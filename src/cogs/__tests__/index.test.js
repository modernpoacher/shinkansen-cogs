import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import Title from 'shinkansen-cogs/components/title'
import Field from 'shinkansen-cogs/components/field'

import Cog, { ValueCog, CheckCog } from 'shinkansen-cogs/cogs'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-cogs/components/title')
jest.mock('shinkansen-cogs/components/field')

const MOCK_ERROR_MESSAGE = {
  type: 'MOCK TYPE',
  params: {},
  uri: 'MOCK URI'
}

describe('shinkansen-cogs/cogs', () => {
  describe('<Cog />', () => {
    describe('With required props', () => {
      const component = (
        <Cog name='MOCK NAME' />
      )

      it('renders', () => {
        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`getClassName`', () => {
          it('is defined', () => {
            expect(Cog.prototype.getClassName)
              .toBeDefined()
          })
        })

        describe('`getId`', () => {
          it('is defined', () => {
            expect(Cog.prototype.getId)
              .toBeDefined()
          })
        })

        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            expect(Cog.prototype.shouldComponentUpdate)
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

      describe('Instance', () => {
        let instance

        beforeEach(() => {
          const wrapper = shallow(component)

          instance = wrapper.instance()
        })

        describe('`getField`', () => {
          it('is defined', () => {
            expect(instance.getField)
              .toBeDefined()
          })
        })

        describe('`getTitle`', () => {
          it('is defined', () => {
            expect(instance.getTitle)
              .toBeDefined()
          })
        })

        describe('`setField`', () => {
          it('is defined', () => {
            expect(instance.setField)
              .toBeDefined()
          })
        })

        describe('`setTitle`', () => {
          it('is defined', () => {
            expect(instance.setTitle)
              .toBeDefined()
          })
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

    describe('`getField()`', () => {
      it('returns the `input` field of the instance', () => {
        const component = (
          <Cog name='MOCK NAME' />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        const mockField = {}

        instance.input = mockField

        expect(instance.getField())
          .toBe(mockField)
      })
    })

    describe('`getTitle()`', () => {
      it('returns the `title` field of the instance', () => {
        const component = (
          <Cog name='MOCK NAME' />
        )

        const wrapper = shallow(component)

        const instance = wrapper.instance()

        const mockTitle = {}

        instance.title = mockTitle

        expect(instance.getTitle())
          .toBe(mockTitle)
      })
    })

    describe('`setField()`', () => {
      describe('With a parameter', () => {
        it('sets the parameter to the instance as the field `input`', () => {
          const component = (
            <Cog name='MOCK NAME' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          const mockField = {}

          instance.setField(mockField)

          expect(instance.input)
            .toBe(mockField)
        })
      })

      describe('With any parameters', () => {
        it('deletes the field `input` from the instance', () => {
          const component = (
            <Cog name='MOCK NAME' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          instance.setField()

          expect(instance.input)
            .toBeUndefined()
        })
      })
    })

    describe('`setTitle()`', () => {
      describe('With a parameter', () => {
        it('sets the parameter to the instance as the field `title`', () => {
          const component = (
            <Cog name='MOCK NAME' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          const mockTitle = {}

          instance.setTitle(mockTitle)

          expect(instance.title)
            .toBe(mockTitle)
        })
      })

      describe('Without any parameters', () => {
        it('deletes the field `title` from the instance', () => {
          const component = (
            <Cog name='MOCK NAME' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          instance.setTitle()

          expect(instance.title)
            .toBeUndefined()
        })
      })
    })

    describe('`getClassName()`', () => {
      beforeEach(() => {
        classnames.mockReset()
      })

      describe('With required props', () => {
        let returnValue

        beforeEach(() => {
          classnames.mockReturnValue('MOCK CLASSNAME')

          const component = (
            <Cog name='MOCK NAME' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          returnValue = instance.getClassName()
        })

        it('invokes `classnames`', () => {
          expect(classnames)
            .toBeCalledWith('cog', { required: false, disabled: false, readOnly: false, error: false })
        })

        it('returns the classname', () => {
          expect(returnValue)
            .toBe('MOCK CLASSNAME')
        })
      })

      describe('With additional props', () => {
        describe('`props` has `required`', () => {
          let returnValue

          beforeEach(() => {
            classnames.mockReturnValue('MOCK CLASSNAME')

            const component = (
              <Cog name='MOCK NAME' required />
            )

            const instance = (
              shallow(component)
                .instance()
            )

            returnValue = instance.getClassName()
          })

          it('invokes `classnames`', () => {
            expect(classnames)
              .toBeCalledWith('cog', { required: true, disabled: false, readOnly: false, error: false })
          })

          it('returns the classname', () => {
            expect(returnValue)
              .toBe('MOCK CLASSNAME')
          })
        })

        describe('`props` has `disabled`', () => {
          let returnValue

          beforeEach(() => {
            classnames.mockReturnValue('MOCK CLASSNAME')

            const component = (
              <Cog name='MOCK NAME' disabled />
            )

            const instance = (
              shallow(component)
                .instance()
            )

            returnValue = instance.getClassName()
          })

          it('invokes `classnames`', () => {
            expect(classnames)
              .toBeCalledWith('cog', { required: false, disabled: true, readOnly: false, error: false })
          })

          it('returns the classname', () => {
            expect(returnValue)
              .toBe('MOCK CLASSNAME')
          })
        })

        describe('`props` has `readOnly`', () => {
          let returnValue

          beforeEach(() => {
            classnames.mockReturnValue('MOCK CLASSNAME')

            const component = (
              <Cog name='MOCK NAME' readOnly />
            )

            const instance = (
              shallow(component)
                .instance()
            )

            returnValue = instance.getClassName()
          })

          it('invokes `classnames`', () => {
            expect(classnames)
              .toBeCalledWith('cog', { required: false, disabled: false, readOnly: true, error: false })
          })

          it('returns the classname', () => {
            expect(returnValue)
              .toBe('MOCK CLASSNAME')
          })
        })

        describe('`props` has `errorMessage`', () => {
          let returnValue

          beforeEach(() => {
            classnames.mockReturnValue('MOCK CLASSNAME')

            const component = (
              <Cog name='MOCK NAME' errorMessage={MOCK_ERROR_MESSAGE} />
            )

            const instance = (
              shallow(component)
                .instance()
            )

            returnValue = instance.getClassName()
          })

          it('invokes `classnames`', () => {
            expect(classnames)
              .toBeCalledWith('cog', { required: false, disabled: false, readOnly: false, error: true })
          })

          it('returns the classname', () => {
            expect(returnValue)
              .toBe('MOCK CLASSNAME')
          })
        })
      })
    })

    describe('`getId()`', () => {
      describe('With required props', () => {
        describe('`props` has `name`', () => {
          it('returns the id', () => {
            const component = (
              <Cog name='MOCK NAME' />
            )

            expect(shallow(component).instance().getId())
              .toBe('MOCK NAME')
          })
        })
      })

      describe('With additional props', () => {
        describe('`props` has `id`', () => {
          it('returns the id', () => {
            const component = (
              <Cog name='MOCK NAME' id='MOCK ID' />
            )

            expect(shallow(component).instance().getId())
              .toBe('MOCK ID')
          })
        })
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ONCHANGE = jest.fn()

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
          onChange={MOCK_ONCHANGE}
        />
      )

      let instance

      beforeEach(() => {
        const wrapper = shallow(component)

        instance = wrapper.instance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          expect(instance.shouldComponentUpdate({
            name: 'MOCK CHANGE NAME',
            id: 'MOCK CHANGE ID',
            title: 'MOCK CHANGE TITLE',
            tabIndex: 0,
            accessKey: 'MOCK CHANGE ACCESS KEY',
            required: false,
            disabled: false,
            readOnly: false,
            placeholder: 'MOCK CHANGE PLACEHOLDER',
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
            title: 'MOCK TITLE',
            tabIndex: 1,
            accessKey: 'MOCK ACCESS KEY',
            required: true,
            disabled: true,
            readOnly: true,
            placeholder: 'MOCK PLACEHOLDER',
            onChange: MOCK_ONCHANGE
          }))
            .toBe(false)
        })
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

        instance = (
          mount(component)
            .instance()
        )

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
        />
      )

      let instance

      let getIdSpy

      beforeEach(() => {
        jest.clearAllMocks()

        instance = (
          mount(component)
            .instance()
        )

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

  describe('<ValueCog />', () => {
    describe('With required props', () => {
      const component = (
        <ValueCog name='MOCK NAME' />
      )

      it('renders', () => {
        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            expect(ValueCog.prototype.shouldComponentUpdate)
              .toBeDefined()
          })
        })
      })

      describe('Instance', () => {
        describe('Extends `<Cog />`', () => {
          it('is defined', () => {
            expect(shallow(component).instance())
              .toBeInstanceOf(Cog)
          })
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <ValueCog
            name='MOCK NAME'
            id='MOCK ID'
            title='MOCK TITLE'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            value='MOCK VALUE'
            placeholder='MOCK PLACEHOLDER'
            onChange={jest.fn()}
          />
        )

        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ONCHANGE = jest.fn()

      const component = (
        <ValueCog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          value='MOCK VALUE'
          placeholder='MOCK PLACEHOLDER'
          onChange={MOCK_ONCHANGE}
        />
      )

      let instance

      beforeEach(() => {
        const wrapper = shallow(component)

        instance = wrapper.instance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          expect(instance.shouldComponentUpdate({
            ...instance.props,
            value: 'MOCK CHANGE VALUE',
            onChange: jest.fn()
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          expect(instance.shouldComponentUpdate({
            ...instance.props,
            value: 'MOCK VALUE',
            onChange: MOCK_ONCHANGE
          }))
            .toBe(false)
        })
      })
    })
  })

  describe('<CheckCog />', () => {
    describe('With required props', () => {
      const component = (
        <CheckCog name='MOCK NAME' />
      )

      it('renders', () => {
        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            expect(CheckCog.prototype.shouldComponentUpdate)
              .toBeDefined()
          })
        })
      })

      describe('Instance', () => {
        describe('Extends `<Cog />`', () => {
          it('is defined', () => {
            expect(shallow(component).instance())
              .toBeInstanceOf(Cog)
          })
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <CheckCog
            name='MOCK NAME'
            id='MOCK ID'
            title='MOCK TITLE'
            tabIndex={1}
            accessKey='MOCK ACCESS KEY'
            required
            disabled
            readOnly
            checked
            placeholder='MOCK PLACEHOLDER'
            onChange={jest.fn()}
            onClick={jest.fn()}
          />
        )

        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ONCHANGE = jest.fn()

      const component = (
        <CheckCog
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          checked
          placeholder='MOCK PLACEHOLDER'
          onChange={MOCK_ONCHANGE}
        />
      )

      let instance

      beforeEach(() => {
        const wrapper = shallow(component)

        instance = wrapper.instance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          expect(instance.shouldComponentUpdate({
            ...instance.props,
            checked: false
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          expect(instance.shouldComponentUpdate({ // instance.props
            ...instance.props,
            checked: true
          }))
            .toBe(false)
        })
      })
    })
  })
})
