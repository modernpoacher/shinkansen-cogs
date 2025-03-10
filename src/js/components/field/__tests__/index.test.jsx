import React from 'react'
import renderer from 'react-test-renderer'

import Field from '#cogs/super/components/field'

import {
  ValueField,
  CheckField
} from '#cogs/components/field'

describe('#cogs/components/field', () => {
  const MOCK_ON_CHANGE = jest.fn()
  const MOCK_ON_CLICK = jest.fn()
  const MOCK_FIELD_REF = {
    current: null
  }

  describe('<ValueField />', () => {
    describe('With required props', () => {
      const component = (
        <ValueField
          name='MOCK NAME'
          value='MOCK VALUE'
        />
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
        /**
         *  @type {void | null | renderer.ReactTestInstance}
         */
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
      describe('Value is a string', () => {
        it('renders', () => {
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
              fieldRef={MOCK_FIELD_REF}
            />
          )

          return expect(renderer.create(component).toJSON())
            .toMatchSnapshot()
        })
      })

      describe('Default value is a string', () => {
        it('renders', () => {
          const component = (
            <ValueField
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              defaultValue='MOCK VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              required
              disabled
              readOnly
              placeholder='MOCK PLACEHOLDER'
              fieldRef={MOCK_FIELD_REF}
            />
          )

          return expect(renderer.create(component).toJSON())
            .toMatchSnapshot()
        })
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
          fieldRef={MOCK_FIELD_REF}
        />
      )

      /**
       *  @type {void | null | renderer.ReactTestInstance}
       */
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
        const component = (
          <ValueField
            name='MOCK NAME'
            value='MOCK VALUE'
            onChange={MOCK_ON_CHANGE}
          />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.handleChange({ target: { value: 'MOCK VALUE' } })

        return expect(MOCK_ON_CHANGE)
          .toBeCalledWith('MOCK NAME', 'MOCK VALUE')
      })
    })
  })

  describe('<CheckField />', () => {
    describe('With required props', () => {
      const component = (
        <CheckField
          name='MOCK NAME'
          value='MOCK VALUE'
        />
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
        /**
         *  @type {void | null | renderer.ReactTestInstance}
         */
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
      describe('Checked is a boolean', () => {
        it('renders', () => {
          const component = (
            <CheckField
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              value='MOCK VALUE'
              checked
              required
              disabled
              readOnly
              placeholder='MOCK PLACEHOLDER'
              fieldRef={MOCK_FIELD_REF}
            />
          )

          return expect(renderer.create(component).toJSON())
            .toMatchSnapshot()
        })
      })

      describe('Default checked is a boolean', () => {
        it('renders', () => {
          const component = (
            <CheckField
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              value='MOCK VALUE'
              defaultChecked
              required
              disabled
              readOnly
              placeholder='MOCK PLACEHOLDER'
              fieldRef={MOCK_FIELD_REF}
            />
          )

          return expect(renderer.create(component).toJSON())
            .toMatchSnapshot()
        })
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const component = (
        <CheckField
          name='MOCK NAME'
          id='MOCK ID'
          title='MOCK TITLE'
          value='MOCK VALUE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          checked
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          fieldRef={MOCK_FIELD_REF}
          onChange={MOCK_ON_CHANGE}
          onClick={MOCK_ON_CLICK}
        />
      )

      /**
       *  @type {void | null | renderer.ReactTestInstance}
       */
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
              onClick: MOCK_ON_CLICK
            }))
              .toBe(false)
          })
        })

        describe('`checked`', () => {
          it('returns false', () => {
            return expect(instance.shouldComponentUpdate({ // instance.props
              ...instance.props,
              checked: true,
              onClick: MOCK_ON_CLICK
            }))
              .toBe(false)
          })
        })
      })
    })

    describe('`handleClick()`', () => {
      it('invokes the `onClick` prop', () => {
        const component = (
          <CheckField
            name='MOCK NAME'
            value='MOCK VALUE'
            onClick={MOCK_ON_CLICK}
          />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.handleClick({ target: { value: 'MOCK VALUE', checked: 'MOCK CHECKED' } })

        return expect(MOCK_ON_CLICK)
          .toBeCalledWith('MOCK NAME', 'MOCK VALUE', 'MOCK CHECKED')
      })
    })

    describe('`handleChange()`', () => {
      it('invokes the `onChange` prop', () => {
        const component = (
          <CheckField
            name='MOCK NAME'
            value='MOCK VALUE'
            onChange={MOCK_ON_CHANGE}
          />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        instance.handleChange({ target: { value: 'MOCK VALUE', checked: 'MOCK CHECKED' } })

        return expect(MOCK_ON_CHANGE)
          .toBeCalledWith('MOCK NAME', 'MOCK VALUE', 'MOCK CHECKED')
      })
    })
  })
})
