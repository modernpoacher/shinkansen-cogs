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

import Super from '#cogs/super/components/field'

import {
  ValueField,
  CheckField
} from '#cogs/components/field'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

describe('#cogs/components/field', () => {
  const MOCK_FIELD_REF = { current: null }
  const MOCK_ON_CHANGE = jest.fn()

  describe('<ValueField />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: field
          }
        } = render(
          <ValueField
            name='MOCK NAME'
          />
        )

        expect(field)
          .toBeInstanceOf(HTMLInputElement)
      })

      describe('Always', () => {
        it('invokes `getClassName`', () => {
          const getClassNameSpy = jest.spyOn(ValueField.prototype, 'getClassName')

          render(
            <ValueField
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
          <ValueField
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
            <ValueField
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
            const getClassNameSpy = jest.spyOn(ValueField.prototype, 'getClassName')

            render(
              <ValueField
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
            <ValueField
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
            <ValueField
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
            const getClassNameSpy = jest.spyOn(ValueField.prototype, 'getClassName')

            render(
              <ValueField
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
            <ValueField
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
      it('returns a string', () => {
        const {
          container
        } = render(
          <ValueField
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
            <ValueField
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
            <ValueField
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

  describe('<CheckField />', () => {
    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: field
          }
        } = render(
          <CheckField
            name='MOCK NAME'
            value='MOCK VALUE'
          />
        )

        expect(field)
          .toBeInstanceOf(HTMLInputElement)
      })

      describe('Always', () => {
        it('invokes `getClassName`', () => {
          const getClassNameSpy = jest.spyOn(Super.prototype, 'getClassName')

          render(
            <CheckField
              name='MOCK NAME'
              value='MOCK VALUE'
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
          <CheckField
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
            <CheckField
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
            const getClassNameSpy = jest.spyOn(Super.prototype, 'getClassName')

            render(
              <CheckField
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
            <CheckField
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
            <CheckField
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
            const getClassNameSpy = jest.spyOn(Super.prototype, 'getClassName')

            render(
              <CheckField
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
            <CheckField
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
      it('returns a string', () => {
        const {
          container
        } = render(
          <CheckField
            name='MOCK NAME'
            value='MOCK VALUE'
          />
        )

        const instance = getInstanceFromContainerElement(container)

        expect(instance.getClassName())
          .toEqual(expect.any(String))
      })
    })

    describe('`handleChange()`', () => {
      describe('Checked is a boolean', () => {
        it('invokes `onChange`', () => {
          const {
            container
          } = render(
            <CheckField
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
            <CheckField
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
