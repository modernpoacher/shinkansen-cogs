import React from 'react'
import renderer from 'react-test-renderer'

import Field from '#cogs/super/components/field'

describe('#cogs/super/components/field', () => {
  const MOCK_ON_CHANGE = jest.fn()
  const MOCK_FIELD_REF = { current: null }

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
            fieldRef={MOCK_FIELD_REF}
          />
        )

        return expect(renderer.create(component).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
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
          fieldRef={MOCK_FIELD_REF}
          onChange={MOCK_ON_CHANGE}
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
            name: 'MOCK CHANGE NAME',
            id: 'MOCK CHANGE ID',
            title: 'MOCK CHANGE TITLE',
            tabIndex: 0,
            accessKey: 'MOCK CHANGE ACCESS KEY',
            required: false,
            disabled: false,
            readOnly: false,
            placeholder: 'MOCK CHANGE PLACEHOLDER',
            onChange: jest.fn(),
            fieldRef: MOCK_FIELD_REF
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
            onChange: MOCK_ON_CHANGE,
            fieldRef: MOCK_FIELD_REF
          }))
            .toBe(false)
        })
      })
    })

    describe('`getClassName()`', () => {
      it('returns the classname', () => {
        const component = (
          <Field
            name='MOCK NAME'
          />
        )

        const instance = (
          renderer.create(component)
            .getInstance()
        )

        return expect(instance.getClassName())
          .toBe('input')
      })
    })
  })
})
