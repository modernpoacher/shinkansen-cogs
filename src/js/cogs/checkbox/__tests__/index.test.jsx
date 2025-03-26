/**
 *  @typedef {CogsTypes.Cogs.CheckProps} CheckProps
 *  @typedef {CogsTypes.Cogs.Checkbox.CheckboxProps} CheckboxProps
 */

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
  CheckCog
} from '#cogs/cogs'

import Cog from '#cogs/cogs/checkbox'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

describe('#cogs/cogs/checkbox', () => {
  describe('<Cog />', () => {
    const MOCK_FIELD_REF = { current: null }
    const MOCK_ON_CHANGE = jest.fn()

    describe('With required props', () => {
      it('renders', () => {
        const {
          container: {
            firstElementChild: cog
          }
        } = render(
          <Cog
            name='MOCK NAME'
            value='MOCK VALUE'
          />
        )

        expect(cog)
          .toBeInstanceOf(HTMLDivElement)
      })

      describe('Always', () => {
        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let getClassNameSpy

        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let renderTitleSpy

        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let renderDescriptionSpy

        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let renderErrorMessageSpy

        /**
         *  @type {undefined | jest.SpyInstance}
         */
        let renderFieldSpy

        beforeEach(() => {
          getClassNameSpy = jest.spyOn(Cog.prototype, 'getClassName')

          renderTitleSpy = jest.spyOn(Cog.prototype, 'renderTitle')

          renderDescriptionSpy = jest.spyOn(Cog.prototype, 'renderDescription')

          renderErrorMessageSpy = jest.spyOn(Cog.prototype, 'renderErrorMessage')

          renderFieldSpy = jest.spyOn(Cog.prototype, 'renderField')

          render(
            <Cog
              name='MOCK NAME'
              value='MOCK VALUE'
            />
          )
        })

        it('invokes `getClassName`', () => {
          expect(getClassNameSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderTitle`', () => {
          expect(renderTitleSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderDescription`', () => {
          expect(renderDescriptionSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderErrorMessage`', () => {
          expect(renderErrorMessageSpy)
            .toHaveBeenCalled()
        })

        it('invokes `renderField`', () => {
          expect(renderFieldSpy)
            .toHaveBeenCalled()
        })
      })

      it('matches the snapshot', () => {
        const {
          container: {
            firstElementChild: element
          }
        } = render(
          <Cog
            name='MOCK NAME'
            value='MOCK VALUE'
          />
        )

        expect(snapshotOf(element))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      describe('Checked is a boolean', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: cog
            }
          } = render(
            <Cog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage='MOCK ERROR MESSAGE'
              value='MOCK VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              checked
              required
              disabled
              readOnly
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(cog)
            .toBeInstanceOf(HTMLDivElement)
        })

        describe('Always', () => {
          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let getClassNameSpy

          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let renderTitleSpy

          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let renderDescriptionSpy

          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let renderErrorMessageSpy

          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let renderFieldSpy

          beforeEach(() => {
            getClassNameSpy = jest.spyOn(Cog.prototype, 'getClassName')

            renderTitleSpy = jest.spyOn(Cog.prototype, 'renderTitle')

            renderDescriptionSpy = jest.spyOn(Cog.prototype, 'renderDescription')

            renderErrorMessageSpy = jest.spyOn(Cog.prototype, 'renderErrorMessage')

            renderFieldSpy = jest.spyOn(Cog.prototype, 'renderField')

            render(
              <Cog
                name='MOCK NAME'
                id='MOCK ID'
                title='MOCK TITLE'
                description='MOCK DESCRIPTION'
                errorMessage='MOCK ERROR MESSAGE'
                value='MOCK VALUE'
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                checked
                required
                disabled
                readOnly
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )
          })

          it('invokes `getClassName`', () => {
            expect(getClassNameSpy)
              .toHaveBeenCalled()
          })

          it('invokes `renderTitle`', () => {
            expect(renderTitleSpy)
              .toHaveBeenCalled()
          })

          it('invokes `renderDescription`', () => {
            expect(renderDescriptionSpy)
              .toHaveBeenCalled()
          })

          it('invokes `renderErrorMessage`', () => {
            expect(renderErrorMessageSpy)
              .toHaveBeenCalled()
          })

          it('invokes `renderField`', () => {
            expect(renderFieldSpy)
              .toHaveBeenCalled()
          })
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: element
            }
          } = render(
            <Cog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage='MOCK ERROR MESSAGE'
              value='MOCK VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              checked
              required
              disabled
              readOnly
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(element))
            .toMatchSnapshot()
        })
      })

      describe('Default checked is a boolean', () => {
        it('renders', () => {
          const {
            container: {
              firstElementChild: cog
            }
          } = render(
            <Cog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage='MOCK ERROR MESSAGE'
              value='MOCK VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              defaultChecked
              required
              disabled
              readOnly
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(cog)
            .toBeInstanceOf(HTMLDivElement)
        })

        describe('Always', () => {
          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let getClassNameSpy

          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let renderTitleSpy

          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let renderDescriptionSpy

          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let renderErrorMessageSpy

          /**
           *  @type {undefined | jest.SpyInstance}
           */
          let renderFieldSpy

          beforeEach(() => {
            getClassNameSpy = jest.spyOn(Cog.prototype, 'getClassName')

            renderTitleSpy = jest.spyOn(Cog.prototype, 'renderTitle')

            renderDescriptionSpy = jest.spyOn(Cog.prototype, 'renderDescription')

            renderErrorMessageSpy = jest.spyOn(Cog.prototype, 'renderErrorMessage')

            renderFieldSpy = jest.spyOn(Cog.prototype, 'renderField')

            render(
              <Cog
                name='MOCK NAME'
                id='MOCK ID'
                title='MOCK TITLE'
                description='MOCK DESCRIPTION'
                errorMessage='MOCK ERROR MESSAGE'
                value='MOCK VALUE'
                tabIndex={1}
                accessKey='MOCK ACCESS KEY'
                defaultChecked
                required
                disabled
                readOnly
                fieldRef={MOCK_FIELD_REF}
                onChange={MOCK_ON_CHANGE}
              />
            )
          })

          it('invokes `getClassName`', () => {
            expect(getClassNameSpy)
              .toHaveBeenCalled()
          })

          it('invokes `renderTitle`', () => {
            expect(renderTitleSpy)
              .toHaveBeenCalled()
          })

          it('invokes `renderDescription`', () => {
            expect(renderDescriptionSpy)
              .toHaveBeenCalled()
          })

          it('invokes `renderErrorMessage`', () => {
            expect(renderErrorMessageSpy)
              .toHaveBeenCalled()
          })

          it('invokes `renderField`', () => {
            expect(renderFieldSpy)
              .toHaveBeenCalled()
          })
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: element
            }
          } = render(
            <Cog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage='MOCK ERROR MESSAGE'
              value='MOCK VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              defaultChecked
              required
              disabled
              readOnly
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(element))
            .toMatchSnapshot()
        })

        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: element
            }
          } = render(
            <Cog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage='MOCK ERROR MESSAGE'
              value='MOCK VALUE'
              tabIndex={1}
              accessKey='MOCK ACCESS KEY'
              defaultChecked
              required
              disabled
              readOnly
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(element))
            .toMatchSnapshot()
        })
      })
    })

    describe('`getClassName()`', () => {
      it('invokes `classnames`', () => {
        /**
         *  Ensure `super.getClassName()` returns a value
         */
        const getClassNameSpy = jest.spyOn(CheckCog.prototype, 'getClassName').mockReturnValue('MOCK CLASSNAME')

        const {
          container
        } = render(
          <Cog
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
            <Cog
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

          instance.handleChange('MOCK CHANGED VALUE', false)

          expect(MOCK_ON_CHANGE)
            .toHaveBeenCalledWith('MOCK CHANGED VALUE', false)
        })
      })

      describe('Default checked is a boolean', () => {
        it('invokes `onChange`', () => {
          const {
            container
          } = render(
            <Cog
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

          instance.handleChange('MOCK CHANGED DEFAULT VALUE', false)

          expect(MOCK_ON_CHANGE)
            .toHaveBeenCalledWith('MOCK CHANGED DEFAULT VALUE', false)
        })
      })
    })

    describe('`renderTitle()`', () => {
      it('invokes `getId`', () => {
        const {
          container
        } = render(
          <Cog
            name='MOCK NAME'
            id='MOCK ID'
            title='MOCK TITLE'
            value='MOCK VALUE'
          />
        )

        const instance = getInstanceFromContainerElement(container)

        /**
         *  Spy (and mock the return value)
         */
        const getIdSpy = jest.spyOn(instance, 'getId').mockReturnValue('MOCK ID')

        instance.renderTitle()

        expect(getIdSpy)
          .toHaveBeenCalled()
      })
    })

    describe('`renderField()`', () => {
      it('invokes `getId`', () => {
        const {
          container
        } = render(
          <Cog
            name='MOCK NAME'
            id='MOCK ID'
            title='MOCK TITLE'
            value='MOCK VALUE'
          />
        )

        const instance = getInstanceFromContainerElement(container)

        /**
         *  Spy (and mock the return value)
         */
        const getIdSpy = jest.spyOn(instance, 'getId').mockReturnValue('MOCK ID')

        instance.renderField()

        expect(getIdSpy)
          .toHaveBeenCalled()
      })
    })
  })
})
