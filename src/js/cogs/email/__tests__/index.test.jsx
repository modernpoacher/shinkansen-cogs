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
  ValueCog
} from '#cogs/cogs'

import Cog from '#cogs/cogs/email'

jest.mock('classnames', () => jest.fn().mockReturnValue('MOCK CLASSNAME'))

describe('#cogs/cogs/email', () => {
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
            firstElementChild: email
          }
        } = render(
          <Cog
            name='MOCK NAME'
          />
        )

        expect(snapshotOf(email))
          .toMatchSnapshot()
      })
    })

    describe('With additional props', () => {
      describe('Value is a string', () => {
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
              required
              disabled
              readOnly
              placeholder='MOCK PLACEHOLDER'
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
                required
                disabled
                readOnly
                placeholder='MOCK PLACEHOLDER'
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

        /**
         *  @deprecated For migration toward Testing Library
         */
        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: email
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
              required
              disabled
              readOnly
              placeholder='MOCK PLACEHOLDER'
              fieldRef={MOCK_FIELD_REF}
              onChange={MOCK_ON_CHANGE}
            />
          )

          expect(snapshotOf(email))
            .toMatchSnapshot()
        })
      })

      describe('Default value is a string', () => {
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
              defaultValue='MOCK DEFAULT VALUE'
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
                defaultValue='MOCK DEFAULT VALUE'
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

        /**
         *  @deprecated For migration toward Testing Library
         */
        it('matches the snapshot', () => {
          const {
            container: {
              firstElementChild: email
            }
          } = render(
            <Cog
              name='MOCK NAME'
              id='MOCK ID'
              title='MOCK TITLE'
              description='MOCK DESCRIPTION'
              errorMessage='MOCK ERROR MESSAGE'
              defaultValue='MOCK DEFAULT VALUE'
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

          expect(snapshotOf(email))
            .toMatchSnapshot()
        })
      })
    })

    describe('`getClassName()`', () => {
      it('invokes `classnames`', () => {
        /**
         *  Ensure `super.getClassName()` returns a value
         */
        const getClassNameSpy = jest.spyOn(ValueCog.prototype, 'getClassName').mockReturnValue('MOCK CLASSNAME')

        const {
          container
        } = render(
          <Cog
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
            <Cog
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

          instance.handleChange('MOCK CHANGED VALUE')

          expect(MOCK_ON_CHANGE)
            .toHaveBeenCalledWith('MOCK CHANGED VALUE')
        })
      })

      describe('Default value is a string', () => {
        it('invokes `onChange`', () => {
          const {
            container
          } = render(
            <Cog
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

          instance.handleChange('MOCK CHANGED DEFAULT VALUE')

          expect(MOCK_ON_CHANGE)
            .toHaveBeenCalledWith('MOCK CHANGED DEFAULT VALUE')
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
