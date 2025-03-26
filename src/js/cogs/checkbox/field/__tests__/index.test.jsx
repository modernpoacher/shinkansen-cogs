import React from 'react'
import classnames from 'classnames'

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

import {
  CheckField
} from '#cogs/components/field'

import Field from '#cogs/cogs/checkbox/field'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

describe('#cogs/cogs/checkbox/field', () => {
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
            value='MOCK VALUE'
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
              value='MOCK VALUE'
            />
          )

          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })
      })

      /**
       *  @deprecated For migration toward Testing Library
       */
      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: field
          }
        } = render(
          <Field
            name='MOCK NAME'
            value='MOCK VALUE'
          />
        )

        expect(snapshotOf(field))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      describe('Checked is a boolean', () => {
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
              checked
              required
              disabled
              readOnly
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
                checked
                required
                disabled
                readOnly
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
              checked
              required
              disabled
              readOnly
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(field))
            .toMatchSnapshot()
        })
      })

      describe('Default checked is a boolean', () => {
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
              defaultChecked
              required
              disabled
              readOnly
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
                defaultChecked
                required
                disabled
                readOnly
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
              defaultChecked
              required
              disabled
              readOnly
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(field))
            .toMatchSnapshot()
        })
      })
    })

    describe('`getClassName()`', () => {
      it('invokes `classnames`', () => {
        /**
         *  Ensure `super.getClassName()` returns a value
         */
        const getClassNameSpy = jest.spyOn(CheckField.prototype, 'getClassName').mockReturnValue('MOCK CLASSNAME')

        const {
          container
        } = render(
          <Field
            name='MOCK NAME'
            value='MOCK VALUE'
          />
        )

        const instance = getInstanceFromContainerElement(container)

        /**
         *  Ensure it is reset after render
         */
        classnames.mockClear()

        /**
         *  Ensure it is reset after render
         */
        getClassNameSpy.mockClear()

        instance.getClassName()

        expect(classnames)
          .toHaveBeenCalledWith('MOCK CLASSNAME', 'checkbox')
      })
    })

    describe('`handleChange()`', () => {
      describe('Checked is a boolean', () => {
        it('invokes `onChange`', () => {
          const {
            container
          } = render(
            <Field
              name='MOCK NAME'
              value='MOCK VALUE'
              checked
              onChange={MOCK_ON_CHANGE}
            />
          )

          const instance = getInstanceFromContainerElement(container)

          /**
           *  Ensure it is reset after render
           */
          MOCK_ON_CHANGE.mockClear()

          instance.handleChange({ target: { value: 'MOCK CHANGED VALUE', checked: false } })

          expect(MOCK_ON_CHANGE)
            .toHaveBeenCalledWith('MOCK CHANGED VALUE', false)
        })
      })

      describe('Default checked is a boolean', () => {
        it('invokes `onChange`', () => {
          const {
            container
          } = render(
            <Field
              name='MOCK NAME'
              value='MOCK VALUE'
              defaultChecked
              onChange={MOCK_ON_CHANGE}
            />
          )

          const instance = getInstanceFromContainerElement(container)

          /**
           *  Ensure it is reset after render
           */
          MOCK_ON_CHANGE.mockClear()

          instance.handleChange({ target: { value: 'MOCK CHANGED DEFAULT VALUE', checked: false } })

          expect(MOCK_ON_CHANGE)
            .toHaveBeenCalledWith('MOCK CHANGED DEFAULT VALUE', false)
        })
      })
    })
  })
})
