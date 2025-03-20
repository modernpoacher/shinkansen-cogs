/**
 *  @typedef {CogsTypes.Cogs.CheckProps} CheckProps
 *  @typedef {CogsTypes.Cogs.Checkbox.CheckboxProps} CheckboxProps
 */

import React from 'react'
import {
  snapshotOf
} from 'react-component-snapshot'
import classnames from 'classnames'

import '@testing-library/jest-dom'

import {
  render
} from '@testing-library/react'

import getComponentInstanceFrom from 'react-component-instance/container'

import {
  CheckCog
} from '#cogs/cogs'

import Cog from '#cogs/cogs/radio'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

const MOCK_ERROR_MESSAGE = {
  type: 'UNKNOWN',
  params: {},
  uri: '#/'
}

describe('#cogs/cogs/radio', () => {
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
            id='MOCK ID'
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
              id='MOCK ID'
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
            firstElementChild: cog
          }
        } = render(
          <Cog
            name='MOCK NAME'
            id='MOCK ID'
            value='MOCK VALUE'
          />
        )

        expect(snapshotOf(cog))
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
              errorMessage={MOCK_ERROR_MESSAGE}
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
                errorMessage={MOCK_ERROR_MESSAGE}
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
              firstElementChild: cog
            }
          } = render(
            <Cog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage={MOCK_ERROR_MESSAGE}
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

          expect(snapshotOf(cog))
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
              errorMessage={MOCK_ERROR_MESSAGE}
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
                errorMessage={MOCK_ERROR_MESSAGE}
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
              firstElementChild: cog
            }
          } = render(
            <Cog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage={MOCK_ERROR_MESSAGE}
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

          expect(snapshotOf(cog))
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
            id='MOCK ID'
            value='MOCK VALUE'
          />
        )

        const instance = getComponentInstanceFrom(container)

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
          .toHaveBeenCalledWith('MOCK CLASSNAME', 'radio')
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
              id='MOCK ID'
              value='MOCK VALUE'
              checked
              onChange={MOCK_ON_CHANGE}
            />
          )

          const instance = getComponentInstanceFrom(container)

          /**
           *  Ensure it is reset after render
           */
          MOCK_ON_CHANGE.mockClear()

          instance.handleChange('MOCK NAME', 'MOCK CHANGED VALUE', false)

          expect(MOCK_ON_CHANGE)
            .toHaveBeenCalledWith('MOCK NAME', 'MOCK CHANGED VALUE', false)
        })
      })

      describe('Default checked is a boolean', () => {
        it('invokes `onChange`', () => {
          const {
            container
          } = render(
            <Cog
              name='MOCK NAME'
              id='MOCK ID'
              value='MOCK VALUE'
              defaultChecked
              onChange={MOCK_ON_CHANGE}
            />
          )

          const instance = getComponentInstanceFrom(container)

          /**
           *  Ensure it is reset after render
           */
          MOCK_ON_CHANGE.mockClear()

          instance.handleChange('MOCK NAME', 'MOCK CHANGED DEFAULT VALUE', false)

          expect(MOCK_ON_CHANGE)
            .toHaveBeenCalledWith('MOCK NAME', 'MOCK CHANGED DEFAULT VALUE', false)
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

        const instance = getComponentInstanceFrom(container)

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

        const instance = getComponentInstanceFrom(container)

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
