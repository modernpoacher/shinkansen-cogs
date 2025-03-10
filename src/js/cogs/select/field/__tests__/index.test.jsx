import React, { Component as mockComponent } from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import {
  ValueField
} from '#cogs/components/field'
import Field from '#cogs/cogs/select/field'

jest.mock('classnames', () => jest.fn(() => 'MOCK CLASSNAME'))

jest.mock('#cogs/components/field', () => {
  class MockField extends mockComponent {
    getClassName () {
      return 'MOCK CLASSNAME'
    }

    shouldComponentUpdate () {
      return true
    }
  }

  return {
    __esModule: true,
    ValueField: MockField,
    toInputValue () {
      return 'MOCK VALUE'
    }
  }
})

describe('#cogs/cogs/select/field', () => {
  const MOCK_FIELD_REF = { current: null }
  const MOCK_ON_CHANGE = jest.fn()

  describe('<Field />', () => {
    describe('With required props', () => {
      const component = (
        <Field
          name='MOCK NAME'
        />
      )

      it('renders', () => {
        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })

      describe('`getClassName`', () => {
        it('is defined', () => {
          return expect(Field.prototype.getClassName)
            .toBeDefined()
        })
      })
    })

    describe('With additional props', () => {
      describe('Multiple is true', () => {
        describe('Value is an array', () => {
          it('renders', () => {
            const component = (
              <Field
                id='MOCK ID'
                name='MOCK NAME'
                value={['MOCK VALUE']}
                required
                disabled
                readOnly
                multiple
                fieldRef={MOCK_FIELD_REF}
              />
            )

            return expect(renderer.create(component).toJSON())
              .toMatchSnapshot()
          })
        })

        describe('Default value is an array', () => {
          it('renders', () => {
            const component = (
              <Field
                id='MOCK ID'
                name='MOCK NAME'
                defaultValue={['MOCK DEFAULT VALUE']}
                required
                disabled
                readOnly
                multiple
                fieldRef={MOCK_FIELD_REF}
              />
            )

            return expect(renderer.create(component).toJSON())
              .toMatchSnapshot()
          })
        })
      })

      describe('Multiple is not true', () => {
        describe('Value is a string', () => {
          it('renders', () => {
            const component = (
              <Field
                id='MOCK ID'
                name='MOCK NAME'
                title='MOCK TITLE'
                value='MOCK VALUE'
                required
                disabled
                readOnly
                multiple={false}
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
              <Field
                id='MOCK ID'
                name='MOCK NAME'
                title='MOCK TITLE'
                defaultValue='MOCK DEFAULT VALUE'
                required
                disabled
                readOnly
                multiple={false}
                fieldRef={MOCK_FIELD_REF}
              />
            )

            return expect(renderer.create(component).toJSON())
              .toMatchSnapshot()
          })
        })
      })
    })

    describe('`getClassName()`', () => {
      let returnValue

      beforeEach(() => {
        jest.spyOn(ValueField.prototype, 'getClassName').mockReturnValue('MOCK GETCLASSNAME')

        const component = (
          <Field
            name='MOCK NAME'
          />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        returnValue = instance.getClassName()
      })

      it('invokes `classnames`', () => {
        return expect(classnames)
          .toBeCalledWith('MOCK GETCLASSNAME', 'select')
      })

      it('returns the classname', () => {
        return expect(returnValue)
          .toBe('MOCK CLASSNAME')
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      const component = (
        <Field
          name='MOCK NAME'
          id='MOCK ID'
          value='MOCK VALUE'
          tabIndex={1}
          accessKey='MOCK ACCESS KEY'
          required
          disabled
          readOnly
          placeholder='MOCK PLACEHOLDER'
          multiple
          fieldRef={MOCK_FIELD_REF}
          onChange={MOCK_ON_CHANGE}>
          MOCK CHILDREN
        </Field>
      )

      /**
       *  @type {void | null | renderer.ReactTestInstance}
       */
      let instance

      beforeEach(() => {
        /**
         *  Always return false (we're not testing conditions in `super.shouldComponentUpdate()`)
         */
        jest.spyOn(ValueField.prototype, 'shouldComponentUpdate').mockReturnValue(false)

        instance = renderer.create(component).getInstance()
      })

      describe('`props` have changed', () => {
        it('returns true', () => {
          return expect(instance.shouldComponentUpdate({
            name: 'MOCK CHANGE NAME',
            id: 'MOCK CHANGE ID',
            value: 'MOCK CHANGE VALUE',
            tabIndex: 0,
            accessKey: 'MOCK CHANGE ACCESS KEY',
            required: false,
            disabled: false,
            readOnly: false,
            placeholder: 'MOCK CHANGE PLACEHOLDER',
            multiple: false,
            children: 'MOCK CHANGE CHILDREN',
            fieldRef: expect.any(Object),
            onChange: expect.any(Function)
          }))
            .toBe(true)
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          return expect(instance.shouldComponentUpdate({ // instance.props
            name: 'MOCK NAME',
            id: 'MOCK ID',
            value: 'MOCK VALUE',
            tabIndex: 1,
            accessKey: 'MOCK ACCESS KEY',
            required: true,
            disabled: true,
            readOnly: true,
            placeholder: 'MOCK PLACEHOLDER',
            multiple: true,
            children: 'MOCK CHILDREN',
            fieldRef: expect.any(Object),
            onChange: expect.any(Function)
          }))
            .toBe(false)
        })
      })
    })
  })
})
