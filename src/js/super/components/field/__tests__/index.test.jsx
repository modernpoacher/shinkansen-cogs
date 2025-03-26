/**
 *  @typedef {CogsTypes.Super.Components.Field.FieldProps} FieldProps
 */

import React from 'react'

import {
  snapshotOf
} from 'react-component-snapshot'

import {
  getInstanceFromContainerElement
} from 'react-component-instance'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import Field from '#cogs/super/components/field'

describe('#cogs/super/components/field', () => {
  const MOCK_FIELD_REF = { current: null }
  const MOCK_ON_CHANGE = jest.fn()

  describe('<Field />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: field
          }
        } = render(
          <Field
            name='MOCK NAME'
          />
        )

        expect(field)
          .toBeInstanceOf(HTMLInputElement)
      })

      describe('Always', () => {
        it('invokes `getClassName`', () => {
          const getClassNameSpy = jest.spyOn(Field.prototype, 'getClassName')

          render(
            <Field
              name='MOCK NAME'
            />
          )

          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: field
          }
        } = render(
          <Field
            name='MOCK NAME'
          />
        )

        expect(snapshotOf(field))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: field
          }
        } = render(
          <Field
            name='MOCK NAME'
            id='MOCK ID'
            value='MOCK VALUE'
            required
            disabled
            readOnly
            placeholder='MOCK PLACEHOLDER'
            fieldRef={MOCK_FIELD_REF}
            onChange={MOCK_ON_CHANGE}
          />
        )

        expect(field)
          .toBeInstanceOf(HTMLInputElement)
      })

      describe('Always', () => {
        it('invokes `getClassName`', () => {
          const getClassNameSpy = jest.spyOn(Field.prototype, 'getClassName')

          render(
            <Field
              name='MOCK NAME'
              id='MOCK ID'
              value='MOCK VALUE'
              required
              disabled
              readOnly
              placeholder='MOCK PLACEHOLDER'
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: field
          }
        } = render(
          <Field
            name='MOCK NAME'
            id='MOCK ID'
            value='MOCK VALUE'
            required
            disabled
            readOnly
            placeholder='MOCK PLACEHOLDER'
            fieldRef={MOCK_FIELD_REF}
            onChange={MOCK_ON_CHANGE}
          />
        )

        expect(snapshotOf(field))
          .toMatchSnapshot()
      })
    })

    describe('`shouldComponentUpdate()`', () => {
      /**
       *  @type {undefined | Component<FieldProps>}
       */
      let instance

      beforeEach(() => {
        const {
          container
        } = render(
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
            onChange={MOCK_ON_CHANGE}
          />
        )

        instance = getInstanceFromContainerElement(container)
      })

      describe('`props` have changed', () => {
        describe('Prop `name` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              name: 'MOCK CHANGE NAME'
            }))
              .toBe(true)
          })
        })

        describe('Prop `id` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              id: 'MOCK CHANGE ID'
            }))
              .toBe(true)
          })
        })

        describe('Prop `value` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              value: 'MOCK CHANGE VALUE'
            }))
              .toBe(true)
          })
        })

        describe('Prop `required` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              required: false
            }))
              .toBe(true)
          })
        })

        describe('Prop `disabled` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              disabled: false
            }))
              .toBe(true)
          })
        })

        describe('Prop `readOnly` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              readOnly: false
            }))
              .toBe(true)
          })
        })

        describe('Prop `tabIndex` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              tabIndex: 0
            }))
              .toBe(true)
          })
        })

        describe('Prop `accessKey` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              accessKey: 'MOCK CHANGE ACCESS KEY'
            }))
              .toBe(true)
          })
        })

        describe('Prop `placeholder` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              placeholder: 'MOCK CHANGE PLACEHOLDER'
            }))
              .toBe(true)
          })
        })

        describe('Prop `onChange` has changed', () => {
          it('returns true', () => {
            expect(instance.shouldComponentUpdate({
              ...instance.props,
              onChange: jest.fn()
            }))
              .toBe(true)
          })
        })
      })

      describe('`props` have not changed', () => {
        it('returns false', () => {
          expect(instance.shouldComponentUpdate({ // instance.props
            ...instance.props
          }))
            .toBe(false)
        })
      })
    })

    describe('`getClassName()`', () => {
      it('returns a string', () => {
        const {
          container
        } = render(
          <Field
            name='MOCK NAME'
          />
        )

        const instance = getInstanceFromContainerElement(container)

        expect(instance.getClassName())
          .toEqual(expect.any(String))
      })
    })

    describe('`handleChange()`', () => {
      describe('Value is a string', () => {
        it('invokes `onChange`', () => {
          const {
            container
          } = render(
            <Field
              name='MOCK NAME'
              value='MOCK VALUE'
              onChange={MOCK_ON_CHANGE}
            />
          )

          const instance = getInstanceFromContainerElement(container)

          /**
           *  Ensure it is reset after render
           */
          MOCK_ON_CHANGE.mockClear()

          instance.handleChange({ target: { value: 'MOCK CHANGED VALUE' } })

          expect(MOCK_ON_CHANGE)
            .toHaveBeenCalledWith('MOCK CHANGED VALUE')
        })
      })

      describe('Default value is a string', () => {
        it('invokes `onChange`', () => {
          const {
            container
          } = render(
            <Field
              name='MOCK NAME'
              defaultValue='MOCK DEFAULT VALUE'
              onChange={MOCK_ON_CHANGE}
            />
          )

          const instance = getInstanceFromContainerElement(container)

          /**
           *  Ensure it is reset after render
           */
          MOCK_ON_CHANGE.mockClear()

          instance.handleChange({ target: { value: 'MOCK CHANGED DEFAULT VALUE' } })

          expect(MOCK_ON_CHANGE)
            .toHaveBeenCalledWith('MOCK CHANGED DEFAULT VALUE')
        })
      })
    })
  })
})
