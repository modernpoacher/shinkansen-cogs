import React from 'react'
import renderer from 'react-test-renderer'

import Field, { ValueField, CheckField } from 'shinkansen-cogs/components/field'

describe('shinkansen-cogs/components/field', () => {
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
        <ValueField name='MOCK NAME' value='MOCK VALUE' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
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

    describe('`shouldComponentUpdate()`', () => {
      const component = (
        <ValueField
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
          <ValueField name='MOCK NAME' value='MOCK VALUE' onChange={MOCK_ONCHANGE} />
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
        <CheckField name='MOCK NAME' value='MOCK VALUE' />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('Prototype', () => {
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
            value='MOCK VALUE'
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

    describe('`shouldComponentUpdate()`', () => {
      const MOCK_ONCHANGE = jest.fn()
      const MOCK_ONCLICK = jest.fn()

      const component = (
        <CheckField
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          value='MOCK VALUE'
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
        describe('`value`', () => {
          it('returns true', () => {
            return expect(instance.shouldComponentUpdate({
              ...instance.props,
              value: 'MOCK CHANGED VALUE',
              onClick: jest.fn()
            }))
              .toBe(true)
          })
        })

        describe('`checked`', () => {
          it('returns true', () => {
            return expect(instance.shouldComponentUpdate({
              ...instance.props,
              checked: false,
              onClick: jest.fn()
            }))
              .toBe(true)
          })
        })
      })

      describe('`props` have not changed', () => {
        describe('`value`', () => {
          it('returns false', () => {
            return expect(instance.shouldComponentUpdate({ // instance.props
              ...instance.props,
              value: 'MOCK VALUE',
              onClick: MOCK_ONCLICK
            }))
              .toBe(false)
          })
        })

        describe('`checked`', () => {
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
    })

    describe('`handleClick()`', () => {
      it('invokes the `onClick` prop', () => {
        const MOCK_ONCLICK = jest.fn()

        const component = (
          <CheckField name='MOCK NAME' value='MOCK VALUE' onClick={MOCK_ONCLICK} />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.handleClick({ target: { value: 'MOCK VALUE', checked: 'MOCK CHECKED' } })

        return expect(MOCK_ONCLICK)
          .toBeCalledWith('MOCK VALUE', 'MOCK CHECKED')
      })
    })

    describe('`handleChange()`', () => {
      it('invokes the `onChange` prop', () => {
        const MOCK_ONCHANGE = jest.fn()

        const component = (
          <CheckField name='MOCK NAME' value='MOCK VALUE' onChange={MOCK_ONCHANGE} />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.handleChange({ target: { value: 'MOCK VALUE', checked: 'MOCK CHECKED' } })

        return expect(MOCK_ONCHANGE)
          .toBeCalledWith('MOCK VALUE', 'MOCK CHECKED')
      })
    })
  })
})
