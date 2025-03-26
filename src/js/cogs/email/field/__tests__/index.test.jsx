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
  ValueField
} from '#cogs/components/field'

import Field from '#cogs/cogs/email/field'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

describe('#cogs/cogs/email/field', () => {
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
      describe('Value is a string', () => {
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

      describe('Default value is a string', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: field
            }
          } = render(
            <Field
              name='MOCK NAME'
              id='MOCK ID'
              defaultValue='MOCK DEFAULT VALUE'
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
                defaultValue='MOCK DEFAULT VALUE'
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
              defaultValue='MOCK DEFAULT VALUE'
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
    })

    describe('`getClassName()`', () => {
      it('invokes `classnames`', () => {
        /**
         *  Ensure `super.getClassName()` returns a value
         */
        const getClassNameSpy = jest.spyOn(ValueField.prototype, 'getClassName').mockReturnValue('MOCK CLASSNAME')

        const {
          container
        } = render(
          <Field
            name='MOCK NAME'
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
          .toHaveBeenCalledWith('MOCK CLASSNAME', 'email')
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
