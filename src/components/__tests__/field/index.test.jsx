import React from 'react'
import renderer from 'react-test-renderer'

import Field, { ValueField, CheckField } from '@modernpoacher/cogs/components/field'

describe('@modernpoacher/cogs/components/field', () => {
  describe('<Field />', () => {
    describe('With required props', () => {
      const component = (
        <Field name='MOCK NAME' />
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

        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            return expect(Field.prototype.shouldComponentUpdate)
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

        describe('`getDOMNode`', () => {
          it('is defined', () => {
            return expect(instance.getDOMNode)
              .toBeDefined()
          })
        })

        describe('`setDOMNode`', () => {
          it('is defined', () => {
            return expect(instance.setDOMNode)
              .toBeDefined()
          })
        })
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const component = (
          <Field
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

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getDOMNode()`', () => {
      it('returns the `domNode` field of the instance', () => {
        const component = (
          <Field name='MOCK NAME' />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        const mockDOMNode = {}

        instance.domNode = mockDOMNode

        return expect(instance.getDOMNode())
          .toBe(mockDOMNode)
      })
    })

    describe('`setDOMNode()`', () => {
      describe('With a parameter', () => {
        it('sets the parameter to the instance as the field `domNode`', () => {
          const component = (
            <Field name='MOCK NAME' />
          )

          const instance = (
            renderer.create(component)
              .getInstance()
          )

          const mockDOMNode = {}

          instance.setDOMNode(mockDOMNode)

          return expect(instance.domNode)
            .toBe(mockDOMNode)
        })
      })

      describe('With any parameters', () => {
        it('deletes the field `domNode` from the instance', () => {
          const component = (
            <Field name='MOCK NAME' />
          )

          const instance = (
            renderer.create(component)
              .getInstance()
          )

          instance.setDOMNode()

          return expect(instance.domNode)
            .toBeUndefined()
        })
      })
    })

    describe('`getClassName()`', () => {
      it('returns the classname', () => {
        const component = (
          <Field name='MOCK NAME' />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        return expect(instance.getClassName())
          .toBe('input')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ONCHANGE = jest.fn()

      const component = (
        <Field
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
        instance = (
          renderer.create(component)
            .getInstance()
        )
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
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
          return expect(instance.shouldComponentUpdate({ // instance.props
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
  })

  describe('<ValueField />', () => {
    describe('With required props', () => {
      const component = (
        <ValueField name='MOCK NAME' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`getValue`', () => {
          it('is defined', () => {
            return expect(ValueField.prototype.getValue)
              .toBeDefined()
          })
        })

        describe('`setValue`', () => {
          it('is defined', () => {
            return expect(ValueField.prototype.setValue)
              .toBeDefined()
          })
        })

        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            return expect(ValueField.prototype.shouldComponentUpdate)
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

        describe('Extends `<Field />`', () => {
          it('is defined', () => {
            return expect(instance)
              .toBeInstanceOf(Field)
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
          <ValueField
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
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getValue()`', () => {
      it('gets the domNode `value` attribute', () => {
        const component = (
          <ValueField name='MOCK NAME' />
        )

        const mockDOMNode = { value: 'MOCK GET VALUE' }

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        jest.spyOn(instance, 'getDOMNode').mockReturnValue(mockDOMNode)

        const value = instance.getValue()

        return expect(value)
          .toBe('MOCK GET VALUE')
      })
    })

    describe('`setValue()`', () => {
      it('sets the domNode `value` attribute', () => {
        const component = (
          <ValueField name='MOCK NAME' />
        )

        const mockDOMNode = {}

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        jest.spyOn(instance, 'getDOMNode').mockReturnValue(mockDOMNode)

        instance.setValue('MOCK SET VALUE')

        return expect(mockDOMNode.value)
          .toBe('MOCK SET VALUE')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const component = (
        <ValueField
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
        />
      )

      let instance

      beforeEach(() => {
        instance = (
          renderer.create(component)
            .getInstance()
        )
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            ...instance.props,
            value: 'MOCK CHANGE VALUE'
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({
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
          <ValueField name='MOCK NAME' onChange={MOCK_ONCHANGE} />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.handleChange({ target: { value: 'MOCK VALUE' } })

        return expect(MOCK_ONCHANGE)
          .toBeCalledWith('MOCK VALUE')
      })
    })
  })

  describe('<CheckField />', () => {
    describe('With required props', () => {
      const component = (
        <CheckField name='MOCK NAME' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
        describe('`getValue`', () => {
          it('is defined', () => {
            return expect(CheckField.prototype.getValue)
              .toBeDefined()
          })
        })

        describe('`setValue`', () => {
          it('is defined', () => {
            return expect(CheckField.prototype.setValue)
              .toBeDefined()
          })
        })

        describe('`shouldComponentUpdate`', () => {
          it('is defined', () => {
            return expect(CheckField.prototype.shouldComponentUpdate)
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

        describe('Extends `<Field />`', () => {
          it('is defined', () => {
            return expect(instance)
              .toBeInstanceOf(Field)
          })
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
          <CheckField
            name='MOCK NAME'
            id='MOCK ID'
            required
            disabled
            readOnly
            checked
            placeholder='MOCK PLACEHOLDER'
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`getValue()`', () => {
      it('gets the domNode `checked` attribute', () => {
        const component = (
          <CheckField name='MOCK NAME' />
        )

        const mockDOMNode = { checked: 'MOCK GET VALUE' }

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        jest.spyOn(instance, 'getDOMNode').mockReturnValue(mockDOMNode)

        const checked = instance.getValue()

        return expect(checked)
          .toBe('MOCK GET VALUE')
      })
    })

    describe('`setValue()`', () => {
      it('sets the domNode `checked` attribute', () => {
        const component = (
          <CheckField name='MOCK NAME' />
        )

        const mockDOMNode = {}

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        jest.spyOn(instance, 'getDOMNode').mockReturnValue(mockDOMNode)

        instance.setValue('MOCK SET VALUE')

        return expect(mockDOMNode.checked)
          .toBe('MOCK SET VALUE')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ONCHANGE = jest.fn()
      const MOCK_ONCLICK = jest.fn()

      const component = (
        <CheckField
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
          onClick={MOCK_ONCLICK}
        />
      )

      let instance

      beforeEach(() => {
        instance = (
          renderer.create(component)
            .getInstance()
        )
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            ...instance.props,
            checked: false,
            onClick: jest.fn()
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
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
          <CheckField name='MOCK NAME' onClick={MOCK_ONCLICK} />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.handleClick({ target: { checked: 'MOCK CHECKED' } })

        return expect(MOCK_ONCLICK)
          .toBeCalledWith('MOCK CHECKED')
      })
    })

    describe('`handleChange()`', () => {
      it('invokes the `onChange` prop', () => {
        const MOCK_ONCHANGE = jest.fn()

        const component = (
          <CheckField name='MOCK NAME' onChange={MOCK_ONCHANGE} />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.handleChange({ target: { checked: 'MOCK CHECKED' } })

        return expect(MOCK_ONCHANGE)
          .toBeCalledWith('MOCK CHECKED')
      })
    })
  })
})
