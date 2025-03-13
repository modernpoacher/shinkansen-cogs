import React from 'react'
import renderer from 'react-test-renderer'
import classnames from 'classnames'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import getInstanceFrom from 'react-component-instance/container'

import {
  ValueField
} from '#cogs/components/field'

import Field from '#cogs/cogs/select/field'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

describe('#cogs/cogs/select/field', () => {
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
          .toBeInstanceOf(HTMLSelectElement)
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

      /**
       *  @deprecated For migration toward Testing Library
       */
      it('matches the snapshot', () => {
        expect(renderer.create((
          <Field
            name='MOCK NAME'
          />
        )).toJSON())
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      describe('Multiple is true', () => {
        describe('Value is an array', () => {
          it('renders', () => {
            const {
              container: {
                firstElementChild: field
              }
            } = render(
              <Field
                name='MOCK NAME'
                id='MOCK ID'
                value={['MOCK VALUE']}
                multiple
                required
                disabled
                readOnly
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )

            expect(field)
              .toBeInstanceOf(HTMLSelectElement)
          })

          describe('Always', () => {
            it('invokes `getClassName`', () => {
              const getClassNameSpy = jest.spyOn(Field.prototype, 'getClassName')

              render(
                <Field
                  name='MOCK NAME'
                  id='MOCK ID'
                  value={['MOCK VALUE']}
                  multiple
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

          /**
           *  @deprecated For migration toward Testing Library
           */
          it('matches the snapshot', () => {
            expect(renderer.create((
              <Field
                name='MOCK NAME'
                id='MOCK ID'
                value={['MOCK VALUE']}
                multiple
                required
                disabled
                readOnly
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )).toJSON())
              .toMatchSnapshot()
          })
        })

        describe('Default value is an array', () => {
          it('renders', () => {
            const {
              container: {
                firstElementChild: field
              }
            } = render(
              <Field
                name='MOCK NAME'
                id='MOCK ID'
                defaultValue={['MOCK DEFAULT VALUE']}
                multiple
                required
                disabled
                readOnly
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )

            expect(field)
              .toBeInstanceOf(HTMLSelectElement)
          })

          describe('Always', () => {
            it('invokes `getClassName`', () => {
              const getClassNameSpy = jest.spyOn(Field.prototype, 'getClassName')

              render(
                <Field
                  name='MOCK NAME'
                  id='MOCK ID'
                  defaultValue={['MOCK DEFAULT VALUE']}
                  multiple
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

          /**
           *  @deprecated For migration toward Testing Library
           */
          it('matches the snapshot', () => {
            expect(renderer.create((
              <Field
                name='MOCK NAME'
                id='MOCK ID'
                defaultValue={['MOCK DEFAULT VALUE']}
                multiple
                required
                disabled
                readOnly
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )).toJSON())
              .toMatchSnapshot()
          })
        })
      })

      describe('Multiple is not true', () => {
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
                multiple={false}
                required
                disabled
                readOnly
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )

            expect(field)
              .toBeInstanceOf(HTMLSelectElement)
          })

          describe('Always', () => {
            it('invokes `getClassName`', () => {
              const getClassNameSpy = jest.spyOn(Field.prototype, 'getClassName')

              render(
                <Field
                  name='MOCK NAME'
                  id='MOCK ID'
                  value='MOCK VALUE'
                  multiple={false}
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

          /**
           *  @deprecated For migration toward Testing Library
           */
          it('matches the snapshot', () => {
            expect(renderer.create((
              <Field
                name='MOCK NAME'
                id='MOCK ID'
                value='MOCK VALUE'
                multiple={false}
                required
                disabled
                readOnly
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )).toJSON())
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
                multiple={false}
                required
                disabled
                readOnly
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )

            expect(field)
              .toBeInstanceOf(HTMLSelectElement)
          })

          describe('Always', () => {
            it('invokes `getClassName`', () => {
              const getClassNameSpy = jest.spyOn(Field.prototype, 'getClassName')

              render(
                <Field
                  name='MOCK NAME'
                  id='MOCK ID'
                  defaultValue='MOCK DEFAULT VALUE'
                  multiple={false}
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

          /**
           *  @deprecated For migration toward Testing Library
           */
          it('matches the snapshot', () => {
            expect(renderer.create((
              <Field
                name='MOCK NAME'
                id='MOCK ID'
                defaultValue='MOCK DEFAULT VALUE'
                multiple={false}
                required
                disabled
                readOnly
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )).toJSON())
              .toMatchSnapshot()
          })
        })
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
          multiple={false}
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
            multiple: true,
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
            multiple: false,
            children: 'MOCK CHILDREN',
            fieldRef: expect.any(Object),
            onChange: expect.any(Function)
          }))
            .toBe(false)
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

        const instance = getInstanceFrom(container)

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
          .toHaveBeenCalledWith('MOCK CLASSNAME', 'select')
      })
    })

    describe('`handleChange()`', () => {
      describe('Multiple is true', () => {
        describe('Value is an array', () => {
          it('invokes `onChange`', () => {
            const {
              container
            } = render(
              <Field
                name='MOCK NAME'
                value={['MOCK VALUE']}
                multiple
                onChange={MOCK_ON_CHANGE}
              />
            )

            const instance = getInstanceFrom(container)

            /**
             *  Ensure it is reset after render
             */
            MOCK_ON_CHANGE.mockClear()

            instance.handleChange({ target: { selectedOptions: [{ value: 'MOCK CHANGED VALUE', text: 'MOCK CHANGE VALUE' }] } })

            expect(MOCK_ON_CHANGE)
              .toHaveBeenCalledWith('MOCK NAME', ['MOCK CHANGED VALUE'])
          })
        })

        describe('Default value is an array', () => {
          it('invokes `onChange`', () => {
            const {
              container
            } = render(
              <Field
                name='MOCK NAME'
                defaultValue={['MOCK DEFAULT VALUE']}
                multiple
                onChange={MOCK_ON_CHANGE}
              />
            )

            const instance = getInstanceFrom(container)

            /**
             *  Ensure it is reset after render
             */
            MOCK_ON_CHANGE.mockClear()

            instance.handleChange({ target: { selectedOptions: [{ value: 'MOCK CHANGED DEFAULT VALUE', text: 'MOCK CHANGED DEFAULT VALUE' }] } })

            expect(MOCK_ON_CHANGE)
              .toHaveBeenCalledWith('MOCK NAME', ['MOCK CHANGED DEFAULT VALUE'])
          })
        })
      })

      describe('Multiple is not true', () => {
        describe('Value is a string', () => {
          it('invokes `onChange`', () => {
            const {
              container
            } = render(
              <Field
                name='MOCK NAME'
                value='MOCK VALUE'
                multiple={false}
                onChange={MOCK_ON_CHANGE}
              />
            )

            const instance = getInstanceFrom(container)

            /**
             *  Ensure it is reset after render
             */
            MOCK_ON_CHANGE.mockClear()

            instance.handleChange({ target: { value: 'MOCK CHANGED VALUE' } })

            expect(MOCK_ON_CHANGE)
              .toHaveBeenCalledWith('MOCK NAME', 'MOCK CHANGED VALUE')
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
                multiple={false}
                onChange={MOCK_ON_CHANGE}
              />
            )

            const instance = getInstanceFrom(container)

            /**
             *  Ensure it is reset after render
             */
            MOCK_ON_CHANGE.mockClear()

            instance.handleChange({ target: { value: 'MOCK CHANGED DEFAULT VALUE' } })

            expect(MOCK_ON_CHANGE)
              .toHaveBeenCalledWith('MOCK NAME', 'MOCK CHANGED DEFAULT VALUE')
          })
        })
      })
    })
  })
})
