import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import classnames from 'classnames'

import Label from 'shinkansen-cogs/components/label'
import Input from 'shinkansen-cogs/components/input'

import Cog, { ValueCog, CheckCog } from 'shinkansen-cogs/cog'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('shinkansen-cogs/components/label')
jest.mock('shinkansen-cogs/components/input')

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

      describe('Instance', () => {
        let instance

        beforeEach(() => {
          const wrapper = shallow(component)

          instance = wrapper.instance()
        })

        describe('`getInput`', () => {
          it('is defined', () => {
            expect(instance.getInput)
              .toBeDefined()
          })
        })

        describe('`getLabel`', () => {
          it('is defined', () => {
            expect(instance.getLabel)
              .toBeDefined()
          })
        })

        describe('`setInput`', () => {
          it('is defined', () => {
            expect(instance.setInput)
              .toBeDefined()
          })
        })

        describe('`setLabel`', () => {
          it('is defined', () => {
            expect(instance.setLabel)
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

        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getInput()`', () => {
      it('returns the `input` field of the instance', () => {
        const component = (
          <Cog name='MOCK NAME' />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        const mockInput = {}

        instance.input = mockInput

        expect(instance.getInput())
          .toBe(mockInput)
      })
    })

    describe('`getLabel()`', () => {
      it('returns the `label` field of the instance', () => {
        const component = (
          <Cog name='MOCK NAME' />
        )

        const wrapper = shallow(component)

        const instance = wrapper.instance()

        const mockLabel = {}

        instance.label = mockLabel

        expect(instance.getLabel())
          .toBe(mockLabel)
      })
    })

    describe('`setInput()`', () => {
      describe('With a parameter', () => {
        it('sets the parameter to the instance as the field `input`', () => {
          const component = (
            <Cog name='MOCK NAME' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          const mockInput = {}

          instance.setInput(mockInput)

          expect(instance.input)
            .toBe(mockInput)
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

          instance.setInput()

          expect(instance.input)
            .toBeUndefined()
        })
      })
    })

    describe('`setLabel()`', () => {
      describe('With a parameter', () => {
        it('sets the parameter to the instance as the field `label`', () => {
          const component = (
            <Cog name='MOCK NAME' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          const mockLabel = {}

          instance.setLabel(mockLabel)

          expect(instance.label)
            .toBe(mockLabel)
        })
      })

      describe('Without any parameters', () => {
        it('deletes the field `label` from the instance', () => {
          const component = (
            <Cog name='MOCK NAME' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          instance.setLabel()

          expect(instance.label)
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
            .not.toBeCalled()
        })

        it('returns the classname', () => {
          expect(returnValue)
            .toBe('cog')
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
              .toBeCalledWith('cog', { required: true, disabled: false, readOnly: false })
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
              .toBeCalledWith('cog', { required: false, disabled: true, readOnly: false })
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
              .toBeCalledWith('cog', { required: false, disabled: false, readOnly: true })
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
          label='MOCK LABEL'
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
            label: 'MOCK CHANGE LABEL',
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
            label: 'MOCK LABEL',
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

    describe('`renderLabel()`', () => {
      const MOCK_ONCHANGE = jest.fn()

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
          onChange={MOCK_ONCHANGE}
        />
      )

      let getIdSpy

      let instance

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
      const MOCK_ONCHANGE = jest.fn()

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
          onChange={MOCK_ONCHANGE}
        />
      )

      let getIdSpy

      let instance

      beforeEach(() => {
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
            onChange: MOCK_ONCHANGE
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
            required
            disabled
            readOnly
            placeholder='MOCK PLACEHOLDER'
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
          label='MOCK LABEL'
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
            value: 'MOCK CHANGE VALUE'
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          expect(instance.shouldComponentUpdate({
            ...instance.props,
            value: 'MOCK VALUE'
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
            required
            disabled
            readOnly
            placeholder='MOCK PLACEHOLDER'
          />
        )

        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ONCLICK = jest.fn()

      const component = (
        <CheckCog
          name='MOCK NAME'
          id='MOCK ID'
          label='MOCK LABEL'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          checked
          placeholder='MOCK PLACEHOLDER'
          onClick={MOCK_ONCLICK}
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
            checked: false,
            onClick: jest.fn()
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          expect(instance.shouldComponentUpdate({ // instance.props
            ...instance.props,
            checked: true,
            onClick: MOCK_ONCLICK
          }))
            .toBe(false)
        })
      })
    })
  })
})
