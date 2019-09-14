import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Input, { ValueInput, CheckInput } from 'shinkansen-cogs/components/input'

Enzyme.configure({ adapter: new Adapter() })

describe('shinkansen-cogs/components/input', () => {
  describe('<Input />', () => {
    describe('With required props', () => {
      const component = (
        <Input name='MOCK NAME' />
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

        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            expect(Input.prototype.shouldComponentUpdate)
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

        describe('`getDOMNode`', () => {
          it('is defined', () => {
            expect(instance.getDOMNode)
              .toBeDefined()
          })
        })

        describe('`setDOMNode`', () => {
          it('is defined', () => {
            expect(instance.setDOMNode)
              .toBeDefined()
          })
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Input
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

    describe('`getDOMNode()`', () => {
      it('returns the `domNode` field of the instance', () => {
        const component = (
          <Input name='MOCK NAME' />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        const mockDOMNode = {}

        instance.domNode = mockDOMNode

        expect(instance.getDOMNode())
          .toBe(mockDOMNode)
      })
    })

    describe('`setDOMNode()`', () => {
      describe('With a parameter', () => {
        it('sets the parameter to the instance as the field `domNode`', () => {
          const component = (
            <Input name='MOCK NAME' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          const mockDOMNode = {}

          instance.setDOMNode(mockDOMNode)

          expect(instance.domNode)
            .toBe(mockDOMNode)
        })
      })

      describe('With any parameters', () => {
        it('deletes the field `domNode` from the instance', () => {
          const component = (
            <Input name='MOCK NAME' />
          )

          const instance = (
            shallow(component)
              .instance()
          )

          instance.setDOMNode()

          expect(instance.domNode)
            .toBeUndefined()
        })
      })
    })

    describe('`getClassName()`', () => {
      it('returns the classname', () => {
        const component = (
          <Input name='MOCK NAME' />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        expect(instance.getClassName())
          .toBe('input')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ONCHANGE = jest.fn()

      const component = (
        <Input
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
  })

  describe('<ValueInput />', () => {
    describe('With required props', () => {
      const component = (
        <ValueInput name='MOCK NAME' />
      )

      it('renders', () => {
        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`getValue`', () => {
          it('is defined', () => {
            expect(ValueInput.prototype.getValue)
              .toBeDefined()
          })
        })

        describe('`setValue`', () => {
          it('is defined', () => {
            expect(ValueInput.prototype.setValue)
              .toBeDefined()
          })
        })

        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            expect(ValueInput.prototype.shouldComponentUpdate)
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

        describe('Extends `<Input />`', () => {
          it('is defined', () => {
            expect(instance)
              .toBeInstanceOf(Input)
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
          <ValueInput
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
            onChange={jest.fn()}
          />
        )

        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getValue()`', () => {
      it('gets the domNode `value` attribute', () => {
        const component = (
          <ValueInput name='MOCK NAME' />
        )

        const mockDOMNode = { value: 'MOCK GET VALUE' }

        const instance = (
          shallow(component)
            .instance()
        )

        jest.spyOn(instance, 'getDOMNode').mockReturnValue(mockDOMNode)

        const value = instance.getValue()

        expect(value)
          .toBe('MOCK GET VALUE')
      })
    })

    describe('`setValue()`', () => {
      it('sets the domNode `value` attribute', () => {
        const component = (
          <ValueInput name='MOCK NAME' />
        )

        const mockDOMNode = {}

        const instance = (
          shallow(component)
            .instance()
        )

        jest.spyOn(instance, 'getDOMNode').mockReturnValue(mockDOMNode)

        instance.setValue('MOCK SET VALUE')

        expect(mockDOMNode.value)
          .toBe('MOCK SET VALUE')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ONCHANGE = jest.fn()

      const component = (
        <ValueInput
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

    describe('`handleChange()`', () => {
      it('invokes the `onChange` prop', () => {
        const MOCK_ONCHANGE = jest.fn()

        const component = (
          <ValueInput name='MOCK NAME' onChange={MOCK_ONCHANGE} />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        instance.handleChange({ target: { value: 'MOCK VALUE' } })

        expect(MOCK_ONCHANGE)
          .toBeCalledWith('MOCK VALUE')
      })
    })
  })

  describe('<CheckInput />', () => {
    describe('With required props', () => {
      const component = (
        <CheckInput name='MOCK NAME' />
      )

      it('renders', () => {
        expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`getValue`', () => {
          it('is defined', () => {
            expect(CheckInput.prototype.getValue)
              .toBeDefined()
          })
        })

        describe('`setValue`', () => {
          it('is defined', () => {
            expect(CheckInput.prototype.setValue)
              .toBeDefined()
          })
        })

        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            expect(CheckInput.prototype.shouldComponentUpdate)
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

        describe('Extends `<Input />`', () => {
          it('is defined', () => {
            expect(instance)
              .toBeInstanceOf(Input)
          })
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
          <CheckInput
            name='MOCK NAME'
            id='MOCK ID'
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

    describe('`getValue()`', () => {
      it('gets the domNode `checked` attribute', () => {
        const component = (
          <CheckInput name='MOCK NAME' />
        )

        const mockDOMNode = { checked: 'MOCK GET VALUE' }

        const instance = (
          shallow(component)
            .instance()
        )

        jest.spyOn(instance, 'getDOMNode').mockReturnValue(mockDOMNode)

        const checked = instance.getValue()

        expect(checked)
          .toBe('MOCK GET VALUE')
      })
    })

    describe('`setValue()`', () => {
      it('sets the domNode `checked` attribute', () => {
        const component = (
          <CheckInput name='MOCK NAME' />
        )

        const mockDOMNode = {}

        const instance = (
          shallow(component)
            .instance()
        )

        jest.spyOn(instance, 'getDOMNode').mockReturnValue(mockDOMNode)

        instance.setValue('MOCK SET VALUE')

        expect(mockDOMNode.checked)
          .toBe('MOCK SET VALUE')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ONCHANGE = jest.fn()
      const MOCK_ONCLICK = jest.fn()

      const component = (
        <CheckInput
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
          onChange={MOCK_ONCHANGE}
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

    describe('`handleClick()`', () => {
      it('invokes the `onClick` prop', () => {
        const MOCK_ONCLICK = jest.fn()

        const component = (
          <CheckInput name='MOCK NAME' onClick={MOCK_ONCLICK} />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        instance.handleClick({ target: { checked: 'MOCK CHECKED' } })

        expect(MOCK_ONCLICK)
          .toBeCalledWith('MOCK CHECKED')
      })
    })

    describe('`handleChange()`', () => {
      it('invokes the `onChange` prop', () => {
        const MOCK_ONCHANGE = jest.fn()

        const component = (
          <CheckInput name='MOCK NAME' onChange={MOCK_ONCHANGE} />
        )

        const instance = (
          shallow(component)
            .instance()
        )

        instance.handleChange({ target: { checked: 'MOCK CHECKED' } })

        expect(MOCK_ONCHANGE)
          .toBeCalledWith('MOCK CHECKED')
      })
    })
  })
})
